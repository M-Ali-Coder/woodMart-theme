import React from "react";
import { Link } from "react-router-dom";

const PostBlogItem = ({ postImage, postTitle, postedBy, description, postTime }) => {
  return (
    <div className="blog-item pd-bottom-20">
      <div className="img-wrapper relative">
        <img src={postImage} alt="post" />
        <div className="posted-in">
          <span className="day">{postTime}</span> <br />
          <span className="day">APR</span>
        </div>
      </div>
      <div className="more-about-post text-center">
        <h3 className=" mr-top-10 mr-bottom-10">
          <Link to="#">{postTitle}</Link>
        </h3>
        <div className="posted-by pd-left-25 pd-right-25">
          <div className="poster-info mr-bottom-10">
            <span className="mr-right-10">Posted by</span>
            <Link to="#">S. Rogers</Link>
            <Link to="#"> </Link>
          </div>
          <p className="mr-bottom-10">{description}</p>
          <Link to="#" className="continue-reading">
            continue reading
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostBlogItem;
