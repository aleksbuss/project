import React from "react";
import ProductsContainer from "../ProductsContainer";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import Wrapper from "../UI/Wrapper";

export default function SaleProducts() {
  const products = useSelector((state) => state.allProducts);

  const products_with_discount_random = products
    .filter((el) => el.discont_price !== null)
    .sort(() => Math.random() - 0.7)
    .slice(0, 5);

  return (
    <Wrapper>
      <div>
        <div className={s.sale_products}>
          <h1>Sale</h1>
        </div>
        <ProductsContainer products={products_with_discount_random} />
      </div>
    </Wrapper>
  );
}
