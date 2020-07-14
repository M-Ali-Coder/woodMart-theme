import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({
  productName,
  image,
  category,
  description,
  price,
  isNew,
  isSale,
  availableColors,
}) => {
  return (
    <div className="single-product">
      <div className="single-product-wrapper">
        <div className="product-img-wrapper">
          <Link to="#">
            <img src={image} alt="" />
          </Link>

          <h1 className="product-offers">sale</h1>
        </div>

        <div className="visiable-product-details">
          <Link to="#" className="product-name">
            {productName}
          </Link>
          <Link to="#" className="product-category">
            {category}
          </Link>
          <div className="product-price-range">
            <div className="min-price">{price}</div>
          </div>
        </div>

        <div className="hidden-product-details">
          <div className="product-description">
            <p>{description}</p>

            <div className="shopping-cart-actions">
              <Link tag="a" to="/wishlist">
                <i className="far fa-heart"></i>
              </Link>
              <Link tag="a" to="/product-page" id="view-product">
                view products
              </Link>
              <Link tag="a" to="/search-product">
                <i className="fas fa-search"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
