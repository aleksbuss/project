import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { getAllCategoriesAndProducts } from "../../requests/products";
import ProductsContainer from "../../components/ProductsContainer";
import FilterForm from "../../components/FilterForms/FilterForm";
import DiscountForm from "../../components/FilterForms/DiscountForm";
import SortForm from "../../components/FilterForms/SortForm";
import Wrapper from "../../components/UI/Wrapper";
import { getAllCategories } from "../../requests/categories";
import s from './style.module.css'


export default function ProductsByTheCategoryPage() {
  const { category } = useParams();

  const dispatch = useDispatch();

  useEffect(() => dispatch(getAllCategories), []);

  const products_by_category_state = useSelector(
    (state) => state.categories.find(el => el.id === +category)
  );

  const allProducts = useSelector(state => state.allProducts)


  return (
    <Wrapper>
      <div>
        <h1 className={s.h1}>{products_by_category_state?.title}</h1> 
        <div className={s.filter_sort}>
          <FilterForm />
          <DiscountForm />
          <SortForm />
        </div>
        <ProductsContainer products={allProducts} paramsCategory={category} />
      </div>
    </Wrapper>
  );
}
