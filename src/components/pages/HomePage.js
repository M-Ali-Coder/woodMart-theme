import React from "react";
import FeaturesCategorySection from "../FeaturesCategorySection";
import FeaturesProductsSection from "../FeaturesProductsSection";
import HomePageSubCarousel from "../HomePageSubCarousel";
import AboutMoodMart from "../AboutMoodMart";
import JoinOurNewsSection from "../JoinOurNewsSection";
import OurLatestNews from "../OurLatestNews";

class HomePage extends React.Component {
  componentDidMount() {
    document.title = "WoodMart || Home Page";
  }
  render() {
    return (
      <div>
        <FeaturesCategorySection />
        <FeaturesProductsSection
          title="Features Products"
          subtitle="Visit our shop to see amazing creations from our designers."
        />
        <HomePageSubCarousel />
        <AboutMoodMart />
        <JoinOurNewsSection />
        <OurLatestNews />
      </div>
    );
  }
}

export default HomePage;
