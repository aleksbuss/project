import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./style.module.css";
import logo from "./logo.png";
import cart from "./cart.png";
import WrapperMain from "../UI/WrapperMain";
 import Search from '../Search'

export default function NavMenu() {
  return (
    <WrapperMain>
      <nav className={s.nav}>
        <div className={s.logo_block}>
          <Link to="/">
            <img className={s.img} src={logo} alt="logo" />
          </Link>
          <Link className={s.linkNoDecoration} to="/categories">
            <div className={s.navButton}>Categories</div>
          </Link>
          <div className={s.search}>
          <Search/>
        </div>   
        </div>
        <div className={s.navlink_wrapper}>
          <div className={s.links}>
            <NavLink to="/" className={s.navLink}>
              Main Page
            </NavLink>
            <NavLink to="/products" className={s.navLink}>
              All Products
            </NavLink>
            <NavLink to="/sales" className={s.navLink}>
              All Sales
            </NavLink>
            <NavLink to="./searched_products"></NavLink>
          </div>
          <div className={s.cart_image}>
            <Link to="./cart">
              <img className={s.cart} src={cart} alt="cart" />
            </Link>
          </div>
        </div>
      </nav>
    </WrapperMain>
  );
}
