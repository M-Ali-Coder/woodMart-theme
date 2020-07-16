import React from "react";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const nav = document.getElementById("scrollNavbar");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    nav.style.top = "0";
  } else {
    nav.style.top = "-64px";
  }
}

const ScrollNav = () => {
  return (
    <div id="scrollNavbar" className="scrollNavbar">
      <div className="navbar-content flex-center-between">
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className="main-navbar">
          <div className="main-navbar-content">
            <ul>
              <li>
                <Link to="/home">home</Link>
              </li>
              <li>
                <Link to="/shop">shop</Link>
              </li>
              <li>
                <Link to="/blog">blog</Link>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="/#">elements</Link>
              </li>
              <li>
                <Link to="/#">buy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollNav;
