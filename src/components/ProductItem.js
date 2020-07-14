import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart, FaSearch } from "react-icons/fa";

const ProductItem = ({
  productName,
  image,
  category,
  description,
  price,
  isNew,
  isSale,
  isHot,
  availableColors,
}) => {
  return (
    <div className="single-product">
      <div className="single-product-wrapper">
        <div className="product-img-wrapper">
          <Link to="#">
            <img src={image} alt="" />
          </Link>
        </div>

        <div className="visiable-product-details">
          <Link to="#" className="product-name">
            {productName}
          </Link>
          <Link to="#" className="product-category">
            {category}
          </Link>
          <div className="product-price-range">
            <div className="min-price">${price}.00</div>
          </div>
        </div>

        <div className="fade-in-details">
          <div className="product-description">
            <p>{description}</p>
          </div>

          <div className="user-actions flex-center-around">
            <FaRegHeart />
            <form>
              <button>select options</button>
            </form>
            <FaSearch />
          </div>
        </div>

        <div className="avilables-offers">
          {isNew && <span className="new-offer">new</span>}
          {isHot && <span className="hot-offer">hot</span>}
          {isSale && <span className="sale-offer">sale</span>}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
