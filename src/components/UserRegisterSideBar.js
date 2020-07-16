import React from "react";
import { Link } from "react-router-dom";

class UserRegisterSideBar extends React.Component {
  componentDidMount() {
    const content = document.querySelector(".user-register-side-menu-content");
    content.addEventListener("click", () => (content.style.right = "-100%"));
  }

  componentWillUnmount() {
    console.log("closed");
  }

  closeContent() {
    const close = document.getElementById("close-side-bar");
    const content = document.querySelector(".user-register-side-menu-content");
    close.addEventListener("click", () => (content.style.right = "-100%"));
  }

  render() {
    return (
      <div className="user-register-side-menu-content">
        <div className="menu-header">
          <div className="header flex-center-between">
            <h4>sign in</h4>
            <div id="close-side-bar" onClick={() => this.closeContent()}>
              X
            </div>
          </div>

          <form id="user-login-form" className="flex-center flex-direction-column">
            <input type="text" name="coupon" placeholder="Username or Email" />
            <input type="password" name="coupon" placeholder="Password" />
            <button></button>
          </form>
          <div className="create-account">
            <Link to="/register">create account</Link>
          </div>
        </div>

        <div className="shopping-cart-footer flex-direction-column">
          <div className="cart-prices-total">
            <h4 className="text-center">or sign in with</h4>
          </div>

          <div className="menu-btns-group flex-center flex-direction-column">
            <Link to="#" className="sing-in-with-facebook mr-bottom-10">
              FACEBOOK
            </Link>
            <Link to="#" className="sing-in-with-google">
              GOOGLE
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default UserRegisterSideBar;
