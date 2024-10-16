import React, { Fragment } from "react";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import FooterS3 from '../../components/footerS3/FooterS3';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { totalPrice } from "../../utils";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../store/actions/action";

const CartPage = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  };

  const { carts } = props;

  return (
    <Fragment>
      <NavbarS2 hclass={'header-section-2 style-two'} />
      <PageTitle pageTitle={'Digital printing Service'} pagesub={'Cart'} />

      <section className="cart-section section-padding section-bg-2">
        <div className="container">
          <div className="main-cart-wrapper">
            <div className="row">
              <div className="col-12">
                <div className="cart-wrapper">
                  <div className="cart-items-wrapper">
                    <table>
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Subtotal</th>
                          <th>Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        {carts &&
                          carts.length > 0 &&
                          carts.map((catItem, crt) => (
                            <tr className="cart-item" key={crt}>
                              <td className="cart-item-info">
                                <img src={catItem.proImg} alt="Image" />
                              </td>
                              <td className="cart-item-price">
                                $ <span className="base-price">{catItem.qty * catItem.price}</span>
                              </td>
                              <td>
                                <div className="cart-item-quantity">
                                  <span className="cart-item-quantity-amount" >{catItem.qty}</span>
                                  <div className="cart-item-quantity-controller">
                                    <button className="cart-increment"
                                      onClick={() =>
                                        props.decrementQuantity(catItem.id)
                                      }>
                                      <i className="far fa-caret-up"></i>
                                    </button>
                                    <button onClick={() =>
                                      props.incrementQuantity(catItem.id)}>
                                      <i className="far fa-caret-down"></i>
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td className="cart-item-price">
                                $ <span className="total-price">{catItem.qty * catItem.price}</span>
                              </td>
                              <td className="cart-item-remove">
                                <button onClick={() =>
                                  props.removeFromCart(catItem.id)
                                }>
                                  <i className="fas fa-times"></i>
                                </button>
                              </td>
                            </tr>
                          ))}

                      </tbody>
                    </table>
                  </div>
                  <div className="cart-wrapper-footer">
                    <form>
                      <input type="text" name="promo-code" id="promoCode" placeholder="Promo code" />
                      <button type="submit" className="theme-btn">
                        <span>Apply Code</span>
                      </button>
                    </form>
                    <Link onClick={ClickHandler} to="/shop" className="theme-btn">
                      <span>Update Cart</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6"></div>
              <div className="col-xl-6">
                <div className="cart-pragh-box">
                  <div className="cart-graph">
                    <h4>Cart Total</h4>
                    <ul>
                      <li>
                        <span>Subtotal</span>
                        <span>${totalPrice(carts)}</span>
                      </li>
                      <li>
                        <span>Shipping</span>
                        <span>$10</span>
                      </li>
                      <li>
                        <span>Total</span>
                        <span>${totalPrice(carts)}</span>
                      </li>
                    </ul>
                    <div className="chck">
                      <Link onClick={ClickHandler} to="/checkout" className="theme-btn">
                        <span>Checkout</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSectionS2 />
      <FooterS3 />
      <CursorMaus />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    carts: state.cartList.cart,
  };
};
export default connect(mapStateToProps, {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
})(CartPage);











