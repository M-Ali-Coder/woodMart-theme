import React from "react";
import PostBlogItem from "../PostBlogItem";
import LATEST_NEWS from "../../data/latestNews";
import AppPagesBanner from "../AppPagesBanner";

class BlogsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: LATEST_NEWS,
    };
  }

  componentDidMount() {
    document.title = "WoodMart || Blog Page";
  }

  render() {
    const { posts } = this.state;
    const blogBackground =
      "https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2015/12/blog-title-bg5.jpg";

    return (
      <div className="blog-page-wrapper">
        <AppPagesBanner title="Woodmart Blog" blogBackground={blogBackground} />
        <div className="content container">
          {posts.map(({ id, ...otherProps }) => (
            <PostBlogItem key={id} {...otherProps} />
          ))}
        </div>
      </div>
    );
  }
}

export default BlogsPage;
