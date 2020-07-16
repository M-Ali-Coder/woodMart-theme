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
          <img src={image} alt="product" />

          {/* product details */}
          <div className="hovered-product-quick-details text-center">
            <div className="product-name">
              <Link to="#">{productName}</Link>
            </div>
            <div className="category">{category}</div>
            <div className="price">${price}.00</div>

            <div className="select-options flex-center-between">
              <FaRegHeart />
              <form>
                <button>select option</button>
              </form>
              <FaSearch />
            </div>
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
