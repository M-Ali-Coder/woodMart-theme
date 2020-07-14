import React, { Component } from "react";
import FEATURES_PRODUCTS from "../data/products";
import ProductItem from "./ProductItem";

class FeaturesProductsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: FEATURES_PRODUCTS,
    };
  }

  render() {
    const { products } = this.state;
    const { title, subtitle } = this.props;

    return (
      <div className="features-products-section-wrapper container">
        <div className="section-title">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>

        <div className="section-content-wrapper">
          {products.map((product) => (
            <ProductItem key={product.id} {...product} />
          ))}
        </div>
      </div>
    );
  }
}

export default FeaturesProductsSection;
