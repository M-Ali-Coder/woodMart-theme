import React from "react";
import { Link } from "react-router-dom";
import Product from "../assets/images/products/product-2.jpg";

class ShoppingCartSideBar extends React.Component {
  closeContent() {
    const close = document.getElementById("close-side-bar");
    const content = document.querySelector(".shopping-cart-side-menu-content");
    close.addEventListener("click", () => {
      content.style.right = "-100%";
    });
  }
  render() {
    return (
      <div className="shopping-cart-side-menu-content">
        <div className="shopping-cart-header">
          <div className="header flex-center-between">
            <h4>shopping cart</h4>
            <div id="close-side-bar" onClick={() => this.closeContent()}>
              X
            </div>
          </div>

          <div className="shopping-cart-products flex-center">
            <img src={Product} alt="product" />
            <div className="about-product flex-direction-column">
              <Link to="#">Smart watches wood edition - Black </Link>
              <span>1 X $300.00</span>
            </div>
          </div>
        </div>

        <div className="shopping-cart-footer flex-direction-column">
          <div className="cart-prices-total flex-center-between">
            <span>subtotal</span>
            <span>$300.00</span>
          </div>

          <div className="cart-btns-group flex-center flex-direction-column">
            <Link to="/cart">view cart</Link>
            <Link to="/checkout">checkout</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCartSideBar;
