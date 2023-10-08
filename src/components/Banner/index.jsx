import React from "react";
import s from "./style.module.css";
import checkitout from "./checkitout.png";
import { Link } from "react-router-dom";
import WrapperMain from "../UI/WrapperMain";

export default function Banner() {
  return (
    <WrapperMain>
      <div className={s.wrapper}>
        <Link to="/sales">
          <div className={s.imageContainer}>
            <img src={checkitout} alt="image" />
          </div>
        </Link>
      </div>
    </WrapperMain>
  );
}
