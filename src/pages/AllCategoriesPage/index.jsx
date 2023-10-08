import React from "react";
import CategoryContainer from "../../components/CategoryContainer";
import { useSelector } from "react-redux";
import Wrapper from "../../components/UI/Wrapper";

export default function AllCategoriesPage() {
  const categories = useSelector((state) => state.categories);

  return (
    <Wrapper>
      <div>
        <CategoryContainer categories={categories} />
      </div>
    </Wrapper>
  );
}
