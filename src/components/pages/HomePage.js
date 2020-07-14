import React from "react";
import FeaturesCategorySection from "../FeaturesCategorySection";
import FeaturesProductsSection from "../FeaturesProductsSection";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <FeaturesCategorySection />
        <FeaturesProductsSection
          title="Features Products"
          subtitle="Visit our shop to see amazing creations from our designers.
"
        />
      </div>
    );
  }
}

export default HomePage;
