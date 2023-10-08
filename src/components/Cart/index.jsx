import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../CartItem";
import s from "./style.module.css";
import FormInput from "../FormInput";
import FormButton from "../FormButton";
import { useForm } from "react-hook-form";
import { getOrder } from "../../requests/products";
import { clearAllAction } from "../../store/reducers/cartReducer";
import emptycart from "./emptycart.png";

export default function Cart() {
  const dispatch = useDispatch();

  const cart_state = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart_state));
  }, [cart_state]);

  const total = cart_state.reduce(
    (acc, el) => acc + (el.discont_price ?? el.price) * el.count,
    0
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const order = register("phone", {
    required: "*This field is required",
    pattern: {
      value: /^(?:\+491\d{10}|01\d{10})$/,
      message: "*wrong format",
    },
  });

  const submit = (data) => {
    getOrder(data);
    reset();
    dispatch(clearAllAction(true));
  };

  return (
    <div className={s.wrapper}>
      <div>
        {cart_state.map((el) => (
          <CartItem key={el.id} {...el} />
        ))}
      </div>

      {cart_state.length === 0 ? (
        <img className={s.emptycart} src={emptycart} alt="" />
      ) : (
        <div className={s.order}>
          <form onSubmit={handleSubmit(submit)}>
            <p className={s.order_details}>Order details</p>
            <div className={s.total}>
              <p>Total</p>
              <p>{total.toFixed(2)}</p>
            </div>

            <div className={s.form_input}>
              <FormInput
                type="text"
                placeholder="+49"
                name="phone"
                {...order}
              />
              {errors.phone && <p className={s.text}>{errors.phone.message}</p>}
            </div>

            <div className={s.form_button}>
              <FormButton>Place order</FormButton>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
