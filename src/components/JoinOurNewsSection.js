import React from "react";

const JoinOurNewsSection = () => {
  return (
    <div className="join-our-news-section-wrapper flex-center-center flex-direction-column">
      <div className="join-our-content container">
        <h3 className="mr-bottom-20">join our newsletter now</h3>
        <div className="sign-up flex-center-center">
          <form autoComplete="off">
            <input type="email" name="email" id="email" placeholder="Enter your email" />
            <button>sign up</button>
          </form>
        </div>
        <p className="mr-top-20">Will be used in accordance with our Privacy Policy</p>
      </div>
    </div>
  );
};

export default JoinOurNewsSection;
