import React from "react";
import {
  decrAction,
  incrAction,
  removeAction,
} from "../../store/reducers/cartReducer";
import s from "./style.module.css";
import { useDispatch } from "react-redux";

export default function CartItem({ id, title, price, count, image, discont_price }) {

  const dispatch = useDispatch();

  const current = (discont_price ?? price) * 1;

  const img = `http://localhost:3333/${image}`

  return (
    <div className={s.wrapper}>
      <img src={img} alt="" />
      <div className={s.count_block}>
          <p>{title}</p>
        <div className={s.inc_desc}>
          <p onClick={() => dispatch(decrAction(id))}>-</p>
          <p>{count}</p>
          <p onClick={() => dispatch(incrAction(id))}>+</p>
        </div>
      </div>
      <div className={s.price_block}>
        <p> {(current).toFixed(2)}$</p> 
        <p>Amount: {( count )}</p>
      </div >
          <p className={s.delete} onClick={() => dispatch(removeAction(id))}>X</p>
      </div>
  );
}
