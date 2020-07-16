import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { FaRegHeart, FaRandom, FaOpencart, FaSearch, FaBars } from "react-icons/fa";
// open-shopping-cart-side-bar
class AppMainHeader extends React.Component {
  showSideMenu() {
    const content = document.querySelector(".shopping-cart-side-menu-content");
    content.style.right = "0";
  }

  showUserSideMenu() {
    const content = document.querySelector(".user-register-side-menu-content");
    content.style.right = "0";
  }
  render() {
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
                <div className="register text-uppercase" onClick={() => this.showUserSideMenu()}>
                  <span>Login</span>
                  <span>register</span>
                </div>
                <div className="shopping-cart flex-center-between">
                  <Link to="#">
                    <FaRegHeart />
                  </Link>
                  <Link to="#" className="relative">
                    <FaRandom />
                    <span className="cart-count">1</span>
                  </Link>
                  <div
                    className="relative"
                    id="open-shopping-cart-side-bar"
                    onClick={() => this.showSideMenu()}
                  >
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
            <div className="shopping-cart relative" onClick={() => this.showSideMenu()}>
              <FaOpencart />
              <div className="cart-count">1</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AppMainHeader;
