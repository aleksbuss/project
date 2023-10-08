import React from "react";
import { useSelector } from "react-redux";
import ProductsContainer from "../../components/ProductsContainer";
import SortForm from "../../components/FilterForms/SortForm";
import FilterForm from "../../components/FilterForms/FilterForm";
import DiscountForm from "../../components/FilterForms/DiscountForm";
import s from "./style.module.css";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/UI/Wrapper";

export default function AllProductsPage() {
  const { category } = useParams();

  const allProducts = useSelector((state) => state.allProducts);

  return (
    <Wrapper>
      <div className={s.header}>
        <h1>All products</h1>
        <div className={s.filter_sort}>
          <FilterForm />
          <DiscountForm />
          <SortForm />
        </div>
        <ProductsContainer products={allProducts} category={category} />
      </div>
    </Wrapper>
  );
}
