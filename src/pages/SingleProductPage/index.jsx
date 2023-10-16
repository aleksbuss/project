import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import s from './style.module.css'
import { addTOCartAction } from '../../store/reducers/cartReducer';
import Wrapper from '../../components/UI/Wrapper';

export default function SingleProductPage() {

  const { id } = useParams();
  const dispatch = useDispatch();


  const singleProduct = useSelector(state => state.allProducts.find(el => el.id === +id));
  
  const { title, price, discont_price, image, description} = singleProduct
  const discount = discont_price === null ? " " : Math.ceil(((price - discont_price) / price) * 100) + "%";

  const img = `http://localhost:3333/${image}`

  return (
    <Wrapper>
    <div className={s.wrapper}>
      <p className={s.title}>{title}</p>
      <div className={s.wrapper_product}>
        <img src={img} alt="" />
        <div className={s.desc_block}>
          <div className={s.prices}>
           <p className={s.price}>{discont_price ?? price}<span>$</span>{" "}</p>
           <p className={s.oldPrice}>{discont_price !== null ? `${price}$` : " "}</p>
           <p className={s.discount}>{discount}</p>
            </div>
            
          <button className={s.add_to_cart} onClick={() => dispatch(addTOCartAction({ id: +id, title, price, image }))}>Add to cart</button>
            
          <div className={s.description}>
            <p>Desciption</p>
            <p>{description}</p>
          </div>
      </div>
     </div>
    </div>
    </Wrapper>
  )
}
