import React from "react";

const AppPagesBanner = ({ title, blogBackground }) => {
  return (
    <div className="app-pages-banner-wrapper">
      <div
        className="banner-content flex-center-center flex-direction-column mr-bottom-40"
        style={{ backgroundImage: `url(${blogBackground})` }}
      >
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default AppPagesBanner;
