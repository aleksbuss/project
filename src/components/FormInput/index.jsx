import React, { forwardRef } from "react";
import s from "./style.module.css";

const FormInput = forwardRef(({ ...props }, ref) => {
  return (
    <div className={s.inputContainer}>
      <input {...props} className={s.input} ref={ref} />
    </div>
  );
});

export default FormInput;
