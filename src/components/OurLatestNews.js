import React from "react";
import LATEST_NEWS from "../data/latestNews";
import PostBlogItem from "./PostBlogItem";

class OurLatestNews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: LATEST_NEWS,
    };
  }

  render() {
    const { posts } = this.state;

    return (
      <div className="our-latest-new-section-wrapper container">
        <div className="section-header text-center mr-bottom-50">
          <h2>OUR LATEST NEWS</h2>
          <p>Latest trends and inspiration in interior design.</p>
        </div>
        <div className="content">
          {posts.slice(0, 3).map(({ id, ...otherProps }) => (
            <PostBlogItem key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default OurLatestNews;
