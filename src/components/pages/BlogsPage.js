import React from "react";
import PostBlogItem from "../PostBlogItem";
import LATEST_NEWS from "../../data/latestNews";

class BlogsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: LATEST_NEWS,
    };
  }
  render() {
    const { posts } = this.state;

    return (
      <div className="blog-page-wrapper container">
        <div>Banner</div>
        <div className="content">
          {posts.map(({ id, ...otherProps }) => (
            <PostBlogItem key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default BlogsPage;
