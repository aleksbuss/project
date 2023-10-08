import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCategoriesAndProducts } from "../../requests/products";
import ProductsContainer from "../../components/ProductsContainer";
import FilterForm from "../../components/FilterForms/FilterForm";
import DiscountForm from "../../components/FilterForms/DiscountForm";
import SortForm from "../../components/FilterForms/SortForm";
import Wrapper from "../../components/UI/Wrapper";

export default function ProductsByTheCategoryPage() {
  const { category } = useParams();

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllCategoriesAndProducts(category)), []);

  const products_by_category_state = useSelector(
    (state) => state.productsByCategory
  );

  return (
    <Wrapper>
      <div>
        <div>
          <FilterForm />
          <DiscountForm />
          <SortForm />
        </div>
        <ProductsContainer products={products_by_category_state} />
      </div>
    </Wrapper>
  );
}
