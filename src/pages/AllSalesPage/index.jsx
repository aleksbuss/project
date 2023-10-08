import React from "react";
import { useSelector } from "react-redux";
import ProductsContainer from "../../components/ProductsContainer";
import FilterForm from "../../components/FilterForms/FilterForm";
import SortForm from "../../components/FilterForms/SortForm";
import s from "./style.module.css";
import Wrapper from "../../components/UI/Wrapper";

export default function AllSalesPage() {
  const products = useSelector((state) => state.allProducts);

  const products_with_discount = products
    .filter((el) => el.discont_price !== null)
    .filter((el) => el.show_product === true)
    .sort(() => Math.random() - 0.5);

  return (
    <Wrapper>
      <div className={s.header}>
        <h1>Products with sale</h1>
        <div className={s.filter_sort}>
          <FilterForm />
          <SortForm />
        </div>
        <ProductsContainer products={products_with_discount} />
      </div>
    </Wrapper>
  );
}
