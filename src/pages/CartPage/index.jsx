import React from "react";
import Cart from "../../components/Cart";
import s from "./style.module.css";
import Wrapper from "../../components/UI/Wrapper";
import { Link } from "react-router-dom";

export default function CartPage() {
  return (
    <Wrapper>
      <p className={s.shopping_cart}>Shopping cart</p>

      <Link to="/products">
        <div className={s.to_store}>
          <p className={s.back_to}>Back to the store </p>
        </div>
      </Link>
      <Cart />
    </Wrapper>
  );
}
