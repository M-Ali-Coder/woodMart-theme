import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { FaRegHeart, FaRandom, FaOpencart, FaSearch, FaBars } from "react-icons/fa";

const AppMainHeader = () => {
  return (
    <>
      <div className="main-header">
        <div className="container">
          <div className="main-header-content flex-center-between">
            <div className="side-menu">
              <FaRegHeart />
              MENU
            </div>
            <div className="logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            {/* <!-- Search for products --> */}
            <div className="search-products">
              <input type="text" name="" id="searchProduct" placeholder="Search for products" />
              <select name="select_category" id="">
                <option>Select Category</option>
                <option value="accessories">Accessories</option>
                <option value="cooks">Cooks</option>
                <option value="toys">Toys</option>
                <option value="clocks">Clocks</option>
                <option value="tables">Tables</option>
              </select>
              <div className="search-icon">
                <FaSearch />
              </div>
            </div>
            {/* <!-- User action --> */}
            <div className="user-action flex-center-around">
              <div className="register">
                <Link to="#">login</Link>
                <Link to="#">register</Link>
              </div>
              <div className="shopping-cart flex-center-between">
                <Link to="#">
                  <FaRegHeart />
                </Link>
                <Link to="#" className="relative">
                  <FaRandom />
                  <span className="cart-count">1</span>
                </Link>
                <div className="relative">
                  <FaOpencart />
                  <span className="cart-count">1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Show from 0px to 1025px */}
      <div className="gerneral-header-wrapper">
        <div className="container flex-center-between">
          <div className="menu-icon flex-center">
            <FaBars />
            Menu
          </div>
          <div className="logo">
            <Logo />
          </div>
          <div className="shopping-cart relative">
            <FaOpencart />
            <div className="cart-count">1</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppMainHeader;
