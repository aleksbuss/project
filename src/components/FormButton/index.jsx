import React from "react";
import s from "./style.module.css";

export default function FormButton({ children }) {
  return (
    <div className={s.wrapper}>
      <button className={s.button}>{children}</button>
    </div>
  );
}
