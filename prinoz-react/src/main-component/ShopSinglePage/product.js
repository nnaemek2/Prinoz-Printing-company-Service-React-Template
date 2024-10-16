import React from 'react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { Link } from 'react-router-dom';

const Product = ({ item, addToCart }) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }

  return (
    <div className="row g-5">
      <div className="col-lg-6">
        <div className="product-image-items">
          <div className="tab-content">
              <div className="product-image">
                <Zoom>
                  <img src={item.proImg ? item.proImg : ''} alt="products" />
                </Zoom>
              </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="product-details-content">
          <div className="star pb-4">
            <span>-5%</span>
            <Link onClick={ClickHandler} to="#"> <i className="fas fa-star"></i></Link>
            <Link onClick={ClickHandler} to="#"><i className="fas fa-star"></i></Link>
            <Link onClick={ClickHandler} to="#"> <i className="fas fa-star"></i></Link>
            <Link onClick={ClickHandler} to="#"><i className="fas fa-star"></i></Link>
            <Link onClick={ClickHandler} to="#" className="color-bg"> <i className="fas fa-star"></i></Link>
            <Link onClick={ClickHandler} to="#" className="text-color">( 2 Reviews )</Link>
          </div>
          <h3 className="pb-4 split-text right">{item.title}</h3>
          <p className="mb-4">
            There are many variations of passages of Lorem Ipsum available, but majority <br />
            have suffered teration in some form, by injected humour, or randomised
          </p>
          <div className="price-list d-flex align-items-center">
            <span>${item.price}</span>
            <del>${item.delPrice}</del>
          </div>
          <div className="color-list">
            <span>Color :</span>
            <ul className="color-box">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className="color-list">
            <span>Size :</span>
            <ul className="size-list">
              <li>XL</li>
              <li>XXL</li>
              <li>M</li>
              <li>L</li>
              <li>4XL</li>
            </ul>
          </div>
          <div className="cart-wrp">
            <div className="shop-button d-flex align-items-center">
              <button className="theme-btn" onClick={() => addToCart(item)}>
                <i className="fa-regular fa-basket-shopping"></i> Add To Cart
              </button>
              <Link to="#" className="star-icon">
                <i className="fal fa-star"></i>
              </Link>
            </div>
          </div>
          <h6 className="shop-text split-text right">Ground Ound Delivery Surcharge : <span>$80.00</span></h6>
          <h6 className="details-info"><span>Sku:</span> N/A</h6>
          <h6 className="details-info"><span>Categories:</span> Pizza</h6>
          <h6 className="details-info"><span>Tags:</span> Burgers, Tacos</h6>
        </div>
      </div>
    </div>
  );
};

export default Product;









