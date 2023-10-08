import React from "react";
import Banner from "../../components/Banner";
import Catalog from "../../components/Catalog";
import SaleProducts from "../../components/SaleProducts";
import FormItem from "../../components/FormItem";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Catalog />
      <FormItem />
      <SaleProducts />
    </div>
  );
}
