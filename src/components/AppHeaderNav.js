import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaBars, FaChevronDown } from "react-icons/fa";
import { ReactComponent as Chef } from "../assets/svg/chef.svg";
import { ReactComponent as Furniture } from "../assets/svg/teddy-bear.svg";
import { ReactComponent as Cooking } from "../assets/svg/chef.svg";
import { ReactComponent as Car } from "../assets/svg/car.svg";
import { ReactComponent as Brain } from "../assets/svg/brain.svg";
import { ReactComponent as Couch } from "../assets/svg/couch.svg";
import { ReactComponent as Jacket } from "../assets/svg/jacket.svg";
import { ReactComponent as Time } from "../assets/svg/time.svg";
import { ReactComponent as Lightbulb } from "../assets/svg/lightbulb.svg";
import { ReactComponent as Wool } from "../assets/svg/wool.svg";
import { ReactComponent as Paper } from "../assets/svg/paper-plane.svg";
import { ReactComponent as HandBag } from "../assets/svg/handbag.svg";

class AppHeaderNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleCategorySideMenu: false,
    };
  }

  render() {
    const { toggleCategorySideMenu } = this.state;

    return (
      <nav id="main-header-nav">
        <div className="container">
          <div className="nav-content">
            <div className="browse-category">
              <div
                className="toggle-menu-wrapper flex-center"
                onClick={() => this.setState({ toggleCategorySideMenu: !toggleCategorySideMenu })}
              >
                <FaBars />
                browse category
              </div>

              <div className="container">
                <div
                  className="browse-by-categories"
                  style={
                    toggleCategorySideMenu
                      ? { height: "auto" }
                      : { height: "0", overflow: "hidden" }
                  }
                >
                  <ul className="our-categories-list">
                    <li className="furniture-list">
                      <Link to="#">
                        <Furniture />
                        <span>Furniture</span>
                      </Link>
                      <FaChevronRight />

                      {/* Mneu */}

                      <div className="furniture-hovered-menu">
                        <div className="furniture-menu-content">
                          <div className="column">
                            <div className="column-image">
                              <img
                                src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/menu-product-1-118x118.jpg"
                                alt=""
                              />
                            </div>
                            <div className="column-content">
                              <div className="title">clocks</div>
                              <ul className="list">
                                <li>
                                  <Link to="#">Mantel Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Wall Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Anniversary Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Travel and alarm</Link>
                                </li>
                                <li>
                                  <Link to="#">Digital Clocks</Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="column">
                            <div className="column-image">
                              <img
                                src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/menu-product-3-118x118.jpg"
                                alt=""
                              />
                            </div>
                            <div className="column-content">
                              <div className="title">tableop</div>
                              <ul className="list">
                                <li>
                                  <Link to="#">Mantel Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Wall Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Anniversary Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Travel and alarm</Link>
                                </li>
                                <li>
                                  <Link to="#">Digital Clocks</Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="column">
                            <div className="column-image">
                              <img
                                src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/menu-product-3-2-118x118.jpg"
                                alt=""
                              />
                            </div>
                            <div className="column-content">
                              <div className="title">kitchen</div>
                              <ul className="list">
                                <li>
                                  <Link to="#">Mantel Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Wall Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Anniversary Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Travel and alarm</Link>
                                </li>
                                <li>
                                  <Link to="#">Digital Clocks</Link>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="column">
                            <div className="column-image">
                              <img
                                src="https://woodmart.xtemos.com/wp-content/uploads/2017/01/menu-product-5-2-118x118.jpg"
                                alt=""
                              />
                            </div>
                            <div className="column-content">
                              <div className="title">lighting</div>
                              <ul className="list">
                                <li>
                                  <Link to="#">Mantel Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Wall Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Anniversary Clocks</Link>
                                </li>
                                <li>
                                  <Link to="#">Travel and alarm</Link>
                                </li>
                                <li>
                                  <Link to="#">Digital Clocks</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="cooking-list">
                      <Link to="#">
                        <Cooking />
                        <span>Cooking</span>
                      </Link>
                      <FaChevronRight />

                      {/* Hovered menu */}
                      <div className="cooking-hovered-menu">
                        <div className="cooking-menu-content">
                          <div className="column">
                            <div className="column-head">clocks</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>

                            <div className="column-head">clocks</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>
                          </div>
                          <div className="column">
                            <div className="column-head">tabletop</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>
                            <div className="column-head">tabletop</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>
                          </div>
                          <div className="column">
                            <div className="column-head">kitchen</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>
                          </div>
                          <div className="column">
                            <div className="column-head">lighting</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li className="accessories-menu">
                      <Link to="#">
                        <Couch />
                        <span>Accessories</span>
                      </Link>
                      <FaChevronRight />

                      <div className="accessories-hovered-menu">
                        <div className="accessories-menu-content">
                          <div className="column">
                            <div className="column-head">clocks</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>

                            <div className="column-head">clocks</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>
                          </div>
                          <div className="column">
                            <div className="column-head">tabletop</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>
                            <div className="column-head">tabletop</div>
                            <div className="column-links">
                              <Link to="#">Mantel Clocks</Link>
                              <Link to="#">Anniversary Clocks</Link>
                              <Link to="#">Wall Clocks</Link>
                              <Link to="#">Digital Clocks</Link>
                              <Link to="#">Travel and alarm</Link>
                            </div>
                          </div>
                          <div className="column">
                            <div className="accessories-right-items">
                              <div className="item">
                                <Chef />
                                <div className="item-quick-details">
                                  <Link to="#" className="product-name">
                                    Decoration wooden present
                                  </Link>
                                  <div className="product-price">$89.00</div>
                                </div>
                              </div>
                              <div className="item">
                                <Chef />
                                <div className="item-quick-details">
                                  <Link to="#" className="product-name">
                                    light wood
                                  </Link>
                                  <div className="product-price">$499.00</div>
                                </div>
                              </div>
                              <div className="item">
                                <Chef />
                                <div className="item-quick-details">
                                  <Link to="#" className="product-name">
                                    keywood accessories
                                  </Link>
                                  <div className="product-price">$119.00</div>
                                </div>
                              </div>
                              <div className="item">
                                <Chef />
                                <div className="item-quick-details">
                                  <Link to="#" className="product-name">
                                    classic wood chair
                                  </Link>
                                  <div className="product-price">$120.00</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>

                    <li>
                      <Link to="#">
                        <Jacket />
                        <span>Fashion</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Time />
                        <span>Clocks</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Lightbulb />
                        <span>Lighting</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="#">
                        <Wool />
                        <span>Toys</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Paper />
                        <span>Hand Made</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <HandBag />
                        <span>Minimalism</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Brain />
                        <span>Elecronics</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <Car />
                        <span>Cars</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                {/* End of .browse-by-category */}
              </div>
            </div>
            <ul className="pages-links">
              <li>
                <Link to="/">home</Link>
              </li>
              <li className="show-shop-mega-menu">
                <Link to="/shop" className="flex-center">
                  <span className="mr-right-5">shop</span>
                  <FaChevronDown />
                </Link>

                <div className="shop-mega-menu-wrapper">
                  <div className="container">
                    <div className="shop-mega-menu-content">
                      <div className="menu-column">
                        <div className="column-head">product hovers</div>
                        <Link to="#">filters area</Link>
                        <Link to="#">no page heading</Link>
                        <Link to="#">
                          my account <span className="new-offer">new</span>
                        </Link>
                        <Link to="#">small categoreis menu</Link>
                        <Link to="#">masonry grid</Link>
                        <Link to="#">products list view</Link>
                        <Link to="#">with background</Link>
                        <Link to="#">category description</Link>
                        <Link to="#">header overlap</Link>
                        <Link to="#">default hsop</Link>
                      </div>

                      <div className="menu-column">
                        <div className="column-head">products pages</div>
                        <Link to="#">default</Link>
                        <Link to="#">centered</Link>
                        <Link to="#">
                          sticky description <span className="hot-offer">new</span>
                        </Link>
                        <Link to="#">widt shadow</Link>
                        <Link to="#">with background</Link>
                        <Link to="#">accordion tabs</Link>
                        <Link to="#">accordion in content</Link>
                        <Link to="#">with sidebar</Link>
                        <Link to="#">extra content #1</Link>
                        <Link to="#">extra content #2</Link>
                      </div>

                      <div className="menu-column">
                        <div className="column-head">product images</div>
                        <Link to="#">thumbanils left</Link>
                        <Link to="#">thumbanils bottom</Link>
                        <Link to="#">sticky image</Link>
                        <Link to="#">one column</Link>
                        <Link to="#">two columns</Link>
                        <Link to="#">
                          sticky description <span className="hot-offer">new</span>
                        </Link>
                        <Link to="#">images frull width</Link>
                        <Link to="#">zoom images</Link>
                        <Link to="#">images size-small</Link>
                        <Link to="#">images size-large</Link>
                        <Link to="#">without thumbanils</Link>
                      </div>

                      <div className="menu-column">
                        <div className="column-head">woocommerce</div>
                        <Link to="#">simple products</Link>
                        <Link to="#">variable product</Link>
                        <Link to="#">extenal products</Link>
                        <Link to="#">grouped product</Link>
                        <Link to="#">shpping cart</Link>
                        <Link to="#">checkout</Link>
                        <Link to="#">
                          my account <span className="new-offer">new</span>
                        </Link>
                        <Link to="#">wishlist</Link>
                        <Link to="#">track order</Link>
                        <Link to="#">custom 404 page #1</Link>
                        <Link to="#">custom 404 page #2</Link>
                      </div>

                      <div className="menu-column">
                        <div className="column-head">product hovers</div>
                        <Link to="#">filters area</Link>
                        <Link to="#">no page heading</Link>
                        <Link to="#">small categoreis menu</Link>
                        <Link to="#">masonry grid</Link>
                        <Link to="#">products list view</Link>
                        <Link to="#">with background</Link>
                        <Link to="#">category description</Link>
                        <Link to="#">header overlap</Link>
                        <Link to="#">default hsop</Link>
                      </div>

                      <div className="menu-column">
                        <div className="column-head">responsive</div>
                        <Link to="#">summart on hover</Link>
                        <Link to="#">icon on hover</Link>
                        <Link to="#">icons & add to cart</Link>
                        <Link to="#">full info on image</Link>
                        <Link to="#">all info on hover</Link>
                        <Link to="#">button on image</Link>
                        <Link to="#">standard button</Link>
                        <Link to="#">quick shop</Link>
                        <Link to="#">
                          sticky description <span className="hot-offer">new</span>
                        </Link>
                        <Link to="#">categories hover #1</Link>
                        <Link to="#">categories hover #2</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="show-blog-menu">
                <Link to="/blogs/news" className="mr-right-5">
                  <span className="mr-right-5">blog</span>
                  <FaChevronDown />
                </Link>

                <div className="blog-hovered-menu">
                  <div className="blog-menu-wrapper">
                    <div className="left-side">
                      <div className="menu-column">
                        <div className="column-head">product hovers</div>
                        <Link to="#">filters area</Link>
                        <Link to="#">no page heading</Link>
                        <Link to="#">
                          my account <span className="new-offer">new</span>
                        </Link>
                        <Link to="#">small categoreis menu</Link>
                        <Link to="#">masonry grid</Link>
                        <Link to="#">products list view</Link>
                        <Link to="#">with background</Link>
                        <Link to="#">category description</Link>
                        <Link to="#">header overlap</Link>
                        <Link to="#">default hsop</Link>
                      </div>
                      <div className="menu-column">
                        <div className="column-head">product hovers</div>
                        <Link to="#">filters area</Link>
                        <Link to="#">no page heading</Link>
                        <Link to="#">
                          my account <span className="new-offer">new</span>
                        </Link>
                        <Link to="#">small categoreis menu</Link>
                        <Link to="#">masonry grid</Link>
                        <Link to="#">products list view</Link>
                        <Link to="#">with background</Link>
                        <Link to="#">category description</Link>
                        <Link to="#">header overlap</Link>
                        <Link to="#">default hsop</Link>
                      </div>
                    </div>

                    <div className="recent-posts">
                      <h5>recent blogs</h5>

                      <div className="blog-items">
                        <div className="item">
                          <div className="img-wrapper">
                            <Link to="#">
                              <Chef />
                            </Link>
                          </div>
                          <div className="some-details">
                            <h6>A companion for extra sleeping</h6>
                            <div className="posted-at">
                              July 23, 2019 <span className="comment">1 comment</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="img-wrapper">
                            <Link to="#">
                              <Chef />
                            </Link>
                          </div>
                          <div className="some-details">
                            <h6>A companion for extra sleeping</h6>
                            <div className="posted-at">
                              July 15, 2019 <span className="comment">7 comment</span>
                            </div>
                          </div>
                        </div>
                        <div className="item">
                          <div className="img-wrapper">
                            <Link to="#">
                              <Chef />
                            </Link>
                          </div>
                          <div className="some-details">
                            <h6>A companion for extra sleeping</h6>
                            <div className="posted-at">
                              Oct 10, 2019 <span className="comment">10 comment</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <Link to="/pages">pages</Link>
              </li>
              <li>
                <Link to="#">element</Link>
              </li>
              <li>
                <Link to="/dfasdfasfsf">buy</Link>
              </li>
            </ul>
            <div className="spcial-offer">
              <Link to="#" className="active-link">
                spacial offer
              </Link>
              <Link to="#">purshase theme</Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default AppHeaderNav;
