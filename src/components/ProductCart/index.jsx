import React from 'react'
import { Link } from 'react-router-dom'
import s from './style.module.css'
import { addTOCartAction } from '../../store/reducers/cartReducer';
import { useDispatch } from 'react-redux';

export default function ProductCart({ id, title, price, image, discont_price}) {
  
  const dispatch = useDispatch()
  
  const discount = discont_price === null ? "" : Math.ceil(((price - discont_price) / price) * 100) + "%";
   
  const img = `http://localhost:3333/${image}`

  return (
    <div className={s.wrapper}>
      <Link className={s.product} to={`/products/${id}`}>
      <img src={img} alt="" />
        <div>
          <div className={s.price_wrapper}>
          <p className={s.price}>{discont_price ?? price}<span>$</span>{" "}</p> 
          <p className={s.old_price}>{discont_price !== null ? `${price}$` : " "}</p>
          <p className={s.discount}>{discount}</p>
      </div>
      <p className={s.title}>{title}</p>
      </div>
      </Link>
      <div className={s.add_wrapper}>
         <button className={s.add_to_cart} onClick={() => dispatch(addTOCartAction({ id, title, price, discont_price, image }))}>Add to cart</button>
      </div>
    </div>
  )
}
