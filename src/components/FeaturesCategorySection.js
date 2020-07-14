import React from "react";
import BigImage from "../assets/images/features-categories/feat-gategories-1.jpg";
import SmallImage1 from "../assets/images/features-categories/feat-gategories-2.jpg";
import SmallImage2 from "../assets/images/features-categories/feat-gategories-3.jpg";
import SmallImage3 from "../assets/images/features-categories/feat-gategories-4.jpg";
import SmallImage4 from "../assets/images/features-categories/feat-gategories-5.jpg";

const FeaturesCategorySection = () => {
  return (
    <div className="features-category-section-wrapper container">
      <div className="section-title">
        <h4>features categories</h4>
        <p>WoodMart is a powerful eCommerce theme for WordPress.</p>
      </div>
      <div className="grid-content">
        <div className="big-column">
          <img src={BigImage} alt="big" />
          <div className="in-stock">
            <h2 className="item-title">Furiture</h2>
            <span>22 products</span>
          </div>
        </div>
        <div className="small-items-wrapper">
          <div className="item">
            <img src={SmallImage1} alt="" />
            <div className="in-stock">
              <h4 className="item-title">clock</h4>
              <span>22 products</span>
            </div>
          </div>
          <div className="item">
            <img src={SmallImage2} alt="" />
            <div className="in-stock">
              <h4 className="item-title">accessories</h4>
              <span>22 products</span>
            </div>
          </div>
          <div className="item">
            <img src={SmallImage3} alt="" />
            <div className="in-stock">
              <h4 className="item-title">lighting</h4>
              <span>22 products</span>
            </div>
          </div>
          <div className="item">
            <img src={SmallImage4} alt="" />
            <div className="in-stock">
              <h4 className="item-title">toys</h4>
              <span>22 products</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCategorySection;
