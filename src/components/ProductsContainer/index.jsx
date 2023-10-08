import React from "react";
import s from "./style.module.css";
import ProductCart from "../ProductCart";

export default function ProductsContainer({ products, category }) {
  const allProducts = category
    ? products.filter((item) => item.categoryId === +category)
    : products;
  
  console.log(products);

  return (
    <div className={s.products_container}>
      {allProducts
        .filter((el) => el.show_product && el.show_product_by_sale)
        .map((el) => (
          <ProductCart key={el.id} {...el} />
        ))}
    </div>
  );
}

