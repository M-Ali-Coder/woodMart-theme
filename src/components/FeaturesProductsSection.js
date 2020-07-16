import React, { Component } from "react";
import FEATURES_PRODUCTS from "../data/products";
import ProductItem from "./ProductItem";

class FeaturesProductsSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: FEATURES_PRODUCTS,
      activeTab: "tab-1",
    };
  }

  render() {
    const { products, activeTab } = this.state;
    const { title, subtitle } = this.props;

    return (
      <div className="features-products-section-wrapper container">
        <div className="section-title">
          <h4>{title}</h4>
          <p>{subtitle}</p>
        </div>
        <div className="tabs-swither">
          <div
            className={activeTab === "tab-1" ? "active" : undefined}
            id="tab1"
            onClick={() => this.setState({ activeTab: "tab-1" })}
          >
            all
          </div>
          <div
            className={activeTab === "tab-2" ? "active" : undefined}
            id="tab2"
            onClick={() => this.setState({ activeTab: "tab-2" })}
          >
            accessories
          </div>
          <div
            className={activeTab === "tab-3" ? "active" : undefined}
            id="tab3"
            onClick={() => this.setState({ activeTab: "tab-3" })}
          >
            decore
          </div>
        </div>
        <div className="section-content-wrapper">
          {activeTab === "tab-1" &&
            products.map(({ id, ...otherProps }) => <ProductItem key={id} {...otherProps} />)}

          {activeTab === "tab-2" &&
            products
              .slice(0, 6)
              .map(({ id, ...otherProps }) => <ProductItem key={id} {...otherProps} />)}

          {activeTab === "tab-3" &&
            products
              .slice(0, 4)
              .map(({ id, ...otherProps }) => <ProductItem key={id} {...otherProps} />)}
        </div>
      </div>
    );
  }
}

export default FeaturesProductsSection;
