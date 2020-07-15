import React from "react";
import { Link } from "react-router-dom";

const AboutMoodMart = () => {
  return (
    <div className="about-woodmart-wrapper flex-item-center  pd-t-60 pd-b-60">
      <div className="container">
        <div className="about-woodmart-content pd-top-30 pd-bottom-30">
          <div>ALL-IN-ONE ECOMMERCE SOLUTION</div>
          <h2 className="pd-top-5 pd-bottom-10">ABOUT OUR WOODMART STORE</h2>
          <p>
            Nec adipiscing luctus consequat penatibus parturient massa cubilia etiam a adipiscing
            <br />
            enigm dignissim congue egestas sapien a. Scelerisque ac <br />
            non ut ac bibendum himenaeos ullamcorper justo himenaeos vel a sapien quis.
          </p>
          <div className="related-links pd-top-20">
            <Link to="#" className="mr-r-10">
              read more
            </Link>
            <Link to="#">contact us</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMoodMart;
