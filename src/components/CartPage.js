import React from "react";
import { Link } from "react-router-dom";
import AppPagesBanner from "./AppPagesBanner";
import Product from "../assets/images/products/product-1.jpg";

class CartPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity: 1,
    };
  }

  render() {
    const { quantity } = this.state;
    const background =
      "https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2015/12/blog-title-bg5.jpg";

    return (
      <div className="cart-page-wrapper">
        <AppPagesBanner title="Cart" blogBackground={background} />
        <div className="cart-page-wrapper container">
          <div className="cart-page-content">
            <h4 className="text-uppercase">
              your cart <span className="items-count-in-shopping-cart">(3 items)</span>
            </h4>
          </div>

          <div className="shopping-cart-table">
            <table>
              <thead>
                <tr>
                  <th>item</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                  <th>remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product-preview">
                    <img src={Product} alt="product" />
                    <div className="product-quick-info">
                      <span className="product-category">collette</span>
                      <Link to="#" className="product-name">
                        [Sample] Collette, florentine jungle dress
                      </Link>
                    </div>
                  </td>
                  <td className="font-bold">$99.00</td>
                  <td className="font-bold">
                    <div className="product-quantity">
                      <button onClick={() => this.setState({ quantity: quantity - 1 })}>-</button>
                      <input
                        type="tel"
                        min="1"
                        value={quantity}
                        onChange={() => this.setState({ quantity: quantity + 1 })}
                      />
                      <button onClick={() => this.setState({ quantity: quantity + 1 })}>+</button>
                    </div>
                  </td>
                  <td className="font-bold">$396.00</td>
                  <td className="font-bold remove-item">X</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="apply-coupon">
            <form>
              <input type="text" name="coupon" placeholder="Coupon code" />
              <button>apply coupon</button>
            </form>

            <button className="update-cart-btn">update cart</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartPage;
