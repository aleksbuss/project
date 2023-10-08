import React from "react";
import { useSelector } from "react-redux";
import s from "./style.module.css";
import { Link } from "react-router-dom";
import CategoryContainer from "../CategoryContainer";
import Wrapper from "../UI/Wrapper";

export default function Catalog() {
  const categories = useSelector((state) => state.categories);
  const catalog = categories.slice(0, 4);

  return (
    <Wrapper>
      <div className={s.catalog_wrapper}>
        <div className={s.title_button}>
          <p>Catalog</p>
          <Link to="/categories">
            <button className={s.all_categories}>All categories</button>
          </Link>
        </div>
        <CategoryContainer categories={catalog} />
      </div>
    </Wrapper>
  );
}
