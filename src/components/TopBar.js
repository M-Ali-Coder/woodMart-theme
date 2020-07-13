import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar-wrapper">
      <div className="container">
        <div className="top-bar-content flex-center-between">
          <ul className="left-side">
            <li className="country border-r">country</li>
            <p>FREE SHIPPING FOR ALL ORDERS OF $150</p>
          </ul>
          <div className="contact-us">
            <ul className="social-media">
              <li>
                <Link to="#">
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaPinterest />
                </Link>
              </li>
            </ul>
            <ul className="links flex-center">
              <li>
                <Link to="#">news letter</Link>
              </li>
              <li>
                <Link to="#">contact us</Link>
              </li>
              <li>
                <Link to="#">faqs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
