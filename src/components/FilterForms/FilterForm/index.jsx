import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterProductsAction } from "../../../store/reducers/allProductsReducer";
import s from "./style.module.css";

export default function FilterForm() {
  const dispatch = useDispatch();

  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const handleMinChange = (e) => {
    setMinValue(e.target.value);
  };

  const handleMaxChange = (e) => {
    setMaxValue(e.target.value);
  };

  useEffect(() => {
    dispatch(
      filterProductsAction({
        min_value: minValue || 0,
        max_value: maxValue || Infinity,
      })
    );
  }, [dispatch, minValue, maxValue]);

  return (
    <form className={s.wrapper}>
      <p>Price</p>
      <input
        type="number"
        placeholder="from"
        name="min"
        value={minValue}
        onChange={handleMinChange}
      />
      <input
        type="number"
        placeholder="to"
        name="max"
        value={maxValue}
        onChange={handleMaxChange}
      />
    </form>
  );
}
