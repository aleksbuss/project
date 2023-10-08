import React from "react";
import FormButton from "../FormButton";
import FormInput from "../FormInput";
import { useForm } from "react-hook-form";
import s from "./style.module.css";
import { getPhoneNumber } from "../../requests/products";
import WrapperMain from "../UI/WrapperMain";

export default function FormItem() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const mobile_phone_register = register("phone", {
    required: "*This field is required",
    pattern: {
      value: /^(?:\+491\d{10}|01\d{10})$/,
      message: "*wrong format",
    },
  });

  const submit = (data) => {
    getPhoneNumber(data);
    reset();
  };

  return (
    <WrapperMain>
      <div className={s.wrapper}>
        <h1>Get 30% off on you first order</h1>
        <form className={s.form} onSubmit={handleSubmit(submit)}>
          <FormInput
            type="text"
            placeholder="+49"
            name="phone"
            {...mobile_phone_register}
          />
          {errors.phone && <p className={s.text}>{errors.phone.message}</p>}
          <FormButton>Get a discount</FormButton>
        </form>
      </div>
    </WrapperMain>
  );
}
