import React from "react";
import AppPagesBanner from "./AppPagesBanner";
import FEATURES_PRODUCTS from "../data/products";
import Brand1 from "../assets/images/brands/brand-1.png";
import Brand2 from "../assets/images/brands/brand-2.png";
import Brand3 from "../assets/images/brands/brand-3.png";
import Brand4 from "../assets/images/brands/brand-4.png";
import Brand5 from "../assets/images/brands/brand-5.png";
import Brand6 from "../assets/images/brands/brand-6.png";
import Product1 from "../assets/images/products/product-1.jpg";
import Product2 from "../assets/images/products/product-2.jpg";
import Product3 from "../assets/images/products/product-3.jpg";
import { Link } from "react-router-dom";
import ProductItem from "./ProductItem";
import { FaStar } from "react-icons/fa";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: FEATURES_PRODUCTS,
    };
  }

  componentDidMount() {
    document.title = "WoodMart || Shop Page";
  }

  render() {
    const { posts } = this.state;
    const blogBackground =
      "https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2015/12/blog-title-bg5.jpg";
    return (
      <div className="shop-page-wrapper">
        <AppPagesBanner title="Shop" blogBackground={blogBackground} />

        <div className="content-wrapper container">
          <div className="sidebar">
            <h4 className="text-uppercase">filter by color</h4>
            <div className="filter-by-colors">
              <ul>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <div className="color-circle black"></div>
                      <span className="text-uppercase">black</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">10</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <div className="color-circle beige"></div>
                      <span className="text-uppercase">beige</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">4</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <div className="color-circle blue"></div>
                      <span className="text-uppercase">blue</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">3</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <div className="color-circle gray"></div>
                      <span className="text-uppercase">gray</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">22</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <div className="color-circle green"></div>
                      <span className="text-uppercase">green</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">23</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <div className="color-circle brown"></div>
                      <span className="text-uppercase">brown</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">12</span>
                </li>
              </ul>
            </div>
            <div className="custom-hr mr-top-20"></div>
            <h4 className="text-uppercase mr-top-20">filter by size</h4>
            <div className="filter-by-size">
              <ul>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <span className="text-uppercase bold-5">xl</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">3</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <span className="text-uppercase bold-5">beige</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">27</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <span className="text-uppercase bold-5">blue</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">21</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <span className="text-uppercase bold-5">gray</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">17</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <span className="text-uppercase bold-5">green</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">27</span>
                </li>
                <li className="choose-color">
                  <Link to="#">
                    <div className="show-color">
                      <span className="text-uppercase bold-5">brown</span>
                    </div>
                  </Link>
                  <span className="color-in-stock">16</span>
                </li>
              </ul>
            </div>
            <div className="custom-hr mr-top-20"></div>
            <h4 className="text-uppercase mr-top-20">filter by brands</h4>
            <div className="filter-by-brands mr-top-20">
              <Link to="#">
                <img src={Brand1} alt="" />
              </Link>
              <Link to="#">
                <img src={Brand2} alt="" />
              </Link>
              <Link to="#">
                <img src={Brand3} alt="" />
              </Link>
              <Link to="#">
                <img src={Brand4} alt="" />
              </Link>
              <Link to="#">
                <img src={Brand5} alt="" />
              </Link>
              <Link to="#">
                <img src={Brand6} alt="" />
              </Link>
            </div>

            <h4 className="text-uppercase mr-top-20">top rated products</h4>
            <div className="top-reted-products">
              <div className="item">
                <Link to="#">
                  <img src={Product1} alt="" />
                </Link>
                <div className="product-details">
                  <Link to="#">
                    <div className="text-uppercase">Decoration for table pen</div>
                  </Link>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <div className="product-price">$200.00</div>
                </div>
              </div>
              <div className="custom-hr mr-top-5"></div>
              <div className="item">
                <Link to="#">
                  <img src={Product2} alt="" />
                </Link>
                <div className="product-details">
                  <Link to="#">
                    <div className="text-uppercase">Fiber base chair</div>
                  </Link>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <div className="product-price">$180.00</div>
                </div>
              </div>
              <div className="custom-hr mr-top-5"></div>
              <div className="item">
                <Link to="#">
                  <img src={Product3} alt="" />
                </Link>
                <div className="product-details">
                  <Link to="#">
                    <div className="text-uppercase">Euismod aliquam parturient</div>
                  </Link>
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <div className="product-price">$250.00</div>
                </div>
              </div>
            </div>
          </div>

          <div className="meet-our-products">
            {posts.slice(0, 6).map(({ id, ...otherProps }) => (
              <ProductItem key={id} {...otherProps} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ShopPage;
