import React from "react";
import AppPagesBanner from "./AppPagesBanner";
import Image1 from "../assets/images/pages/pages-1.jpg";
import Image2 from "../assets/images/pages/pages-2.jpg";
import Image3 from "../assets/images/pages/pages-3.jpg";
import Image4 from "../assets/images/pages/pages-4.jpg";
import Image5 from "../assets/images/pages/pages-5.jpg";
import Image6 from "../assets/images/pages/pages-6.jpg";
import { Link } from "react-router-dom";

class PagesPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "tab-1",
    };
  }

  componentDidMount() {
    document.title = "WoodMart || Pages ELements Page";
  }

  render() {
    const { activeTab } = this.state;
    const blogBg =
      "https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2015/12/portfolio-title-bg7.jpg";

    return (
      <div className="pages-page-wrapper">
        <AppPagesBanner title="Portofolio" blogBackground={blogBg} />

        <section className="browse-by-pages container">
          <div className="tabs-swither">
            <div
              className={activeTab === "tab-1" ? "active" : undefined}
              id="tab1"
              onClick={() => this.setState({ activeTab: "tab-1" })}
            >
              all
            </div>
            <div
              className={activeTab === "tab-2" ? "active" : undefined}
              id="tab2"
              onClick={() => this.setState({ activeTab: "tab-2" })}
            >
              accessories
            </div>
            <div
              className={activeTab === "tab-3" ? "active" : undefined}
              id="tab3"
              onClick={() => this.setState({ activeTab: "tab-3" })}
            >
              decore
            </div>
          </div>

          <div className="tabs-content">
            {activeTab === "tab-1" && (
              <div id="tab1-content">
                <div className="all-page-tab-content">
                  <Link to="#" className="item">
                    <img src={Image1} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image2} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image3} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image4} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image5} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image6} alt="" />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "tab-2" && (
              <div id="tab1-content">
                <div className="all-page-tab-content">
                  <Link to="#" className="item">
                    <img src={Image4} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image1} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image2} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image3} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image6} alt="" />
                  </Link>
                </div>
              </div>
            )}

            {activeTab === "tab-3" && (
              <div id="tab1-content">
                <div className="all-page-tab-content">
                  <Link to="#" className="item">
                    <img src={Image2} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image3} alt="" />
                  </Link>
                  <Link to="#" className="item">
                    <img src={Image5} alt="" />
                  </Link>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }
}

export default PagesPage;
