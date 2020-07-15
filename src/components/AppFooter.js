import React from "react";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { FaTelegramPlane, FaMobileAlt, FaRegFolder } from "react-icons/fa";

const AppFooter = () => {
  return (
    <div className="app-footer-wrapper mr-top-50">
      <div className="footer-content pd-top-40 pd-bottom-40">
        <div className="container">
          <div className="row">
            <div className="column">
              <Link to="/" className="logo">
                <img className="mr-bottom-10" src={Logo} alt="logo" />
              </Link>
              <p>
                Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis
                nam parturient.
              </p>
              <div className="flex-center mr-top-20">
                <FaTelegramPlane />
                <p>451 Wall Street, UK, London</p>
              </div>
              <div className="flex-center mr-top-10">
                <FaMobileAlt />
                <p>Phone: (064) 332-1233</p>
              </div>
              <div className="flex-center mr-top-10">
                <FaRegFolder />
                <p>Fax: (099) 453-1357</p>
              </div>
            </div>

            <div className="column">
              <div className="col-head">our stores</div>
              <ul>
                <li>
                  <Link to="#">new yourk</Link>
                </li>
                <li>
                  <Link to="#">london sf</Link>
                </li>
                <li>
                  <Link to="#">cockfosters bp</Link>
                </li>
                <li>
                  <Link to="#">los angeles</Link>
                </li>
                <li>
                  <Link to="#">chicago</Link>
                </li>
                <li>
                  <Link to="#">las vegas</Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <div className="col-head">useful links</div>
              <ul>
                <li>
                  <Link to="#">privacy policy</Link>
                </li>
                <li>
                  <Link to="#">returns</Link>
                </li>
                <li>
                  <Link to="#">terms & conditions</Link>
                </li>
                <li>
                  <Link to="#">contact us</Link>
                </li>
                <li>
                  <Link to="#">latest news</Link>
                </li>
                <li>
                  <Link to="#">our sitemap</Link>
                </li>
              </ul>
            </div>

            <div className="column">
              <div className="col-head">footer menu</div>
              <ul>
                <li>
                  <Link to="#">instagram</Link>
                </li>
                <li>
                  <Link to="#">new collection</Link>
                </li>
                <li>
                  <Link to="#">woman dress</Link>
                </li>
                <li>
                  <Link to="#">contact us</Link>
                </li>
                <li>
                  <Link to="#">latest news</Link>
                </li>
                <li>
                  <Link to="#">purchase theme</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="follow-me mr-top-30">
            <p className="mr-top-10">
              <Link to="#" className="made-by">
                <b>MegaCode</b>
              </Link>{" "}
              2019 CREATED BY XTEMOS STUDIO. PREMIUM E-COMMERCE SOLUTIONS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
