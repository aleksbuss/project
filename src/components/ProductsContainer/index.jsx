import React from "react";
import s from "./style.module.css";
import ProductCart from "../ProductCart";

export default function ProductsContainer({
  products,
  paramsCategory,
}) {
 

  return (
    <div className={s.products_container}>
      {
        paramsCategory
        ? products
            .filter((el) => el.categoryId === +paramsCategory)
            .filter((el) => el.show_product && el.show_product_by_sale)
            .map((el) => <ProductCart key={el.id} {...el} />)
        : products
            .filter((el) => el.show_product && el.show_product_by_sale)
            .map((el) => <ProductCart key={el.id} {...el} />)
      }
    </div>
  );
}
