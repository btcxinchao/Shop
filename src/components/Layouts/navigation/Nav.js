import React from "react";
import { NavLink,Link } from "react-router-dom";
import "./nav.scss";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
const Nav = () => {
  return (
    <div id="Nav">
      <div className="container">
        <div className="row-nav">
          <ul className="navleft">
            <img
              src="https://png.pngtree.com/png-clipart/20230207/original/pngtree-beauty-logo-design-png-image_8947095.png"
              alt="logo"
            />
          </ul>
          <div className="navmid">
            <input type="text" placeholder="Search" />
            <div className="Search-icon">
              
              <IoSearchOutline />
            </div>
          </div>
          <ul className="navright">
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
            <li>
              <NavLink to="/colection">COLECTION</NavLink>
            </li>
            <li className="cart">
              <NavLink to="/cart" >
              <FaCartPlus className="cart-icon"/>
              </NavLink>
              <span className="number-order">10</span>
            </li>

            <li className="dropdown">
              <NavLink to="/acc" className="user">
                <CiUser className="user-icon" />
              </NavLink>
              <ul className="dropdow-user">
                <li className="my-profile">
                  <NavLink to="/profile">My Profile</NavLink>
                </li>
                <li className="order">
                  <NavLink to="/order">Order</NavLink>
                </li>
                <li className="logout">
                  <NavLink to="/login">Log out</NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
