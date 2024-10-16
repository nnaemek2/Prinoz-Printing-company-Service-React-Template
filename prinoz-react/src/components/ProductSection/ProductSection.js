import React, { useEffect, useState } from 'react';
import ProdactShape from '../../img/product/shape-1.png'
import { Link } from 'react-router-dom';

const ProductSection = ({ products, addToCartProduct }) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    const [activeTab, setActiveTab] = useState('Tab2');
    const openTab = (TabName) => {
        setActiveTab(TabName);
    }
    useEffect(() => {
        openTab('Tab2');
    }, []);

    return (
        <section className="product-section section-padding pt-0">
            <div className="shape-image">
                <img src={ProdactShape} alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6>Digital printing Service</h6>
                    <h2>Explore Features Product</h2>
                </div>
                <div className="product-header mt-4 mt-md-0">
                    <ul className="nav">
                        <li className="nav-item" >
                            <button className={`nav-link ${activeTab === 'Tab1' ? 'active' : ''}`} onClick={() => openTab('Tab1')}>
                                Business Cards
                            </button>
                        </li>
                        <li className="nav-item" >
                            <button className={`nav-link ${activeTab === 'Tab2' ? 'active' : ''}`} onClick={() => openTab('Tab2')}>
                                Books & Prints
                            </button>
                        </li>
                        <li className="nav-item" >
                            <button className={`nav-link ${activeTab === 'Tab3' ? 'active' : ''}`} onClick={() => openTab('Tab3')}>
                                T-shirt & Cloths
                            </button>
                        </li>
                        <li className="nav-item" >
                            <button className={`nav-link ${activeTab === 'Tab4' ? 'active' : ''}`} onClick={() => openTab('Tab4')}>
                                Invitation Card
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div id="Tab1" style={{ display: activeTab === 'Tab1' ? 'block' : 'none' }} >
                        <div className="row">
                            {products.length > 0 &&
                                products.slice(0, 8).map((product, pitem) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6" key={pitem}>
                                        <div className="product-box-items">
                                            <div className="product-image">
                                                <img src={product.proImg} alt="img" />
                                                <ul className="product-icon d-grid align-items-center">
                                                    <li>
                                                        <button
                                                            onClick={() => addToCartProduct(product)}><i className="fa-sharp fa-regular fa-eye"></i></button>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-regular fa-star"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}><i className="fa-regular fa-arrow-up-arrow-down"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="shop-btn">
                                                    <button
                                                        onClick={() => addToCartProduct(product)} className="theme-btn">Add To Cart</button>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="color-2 fa-solid fa-star"></i>
                                                </div>
                                                <h6><Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>{product.title}</Link></h6>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div id="Tab2" style={{ display: activeTab === 'Tab2' ? 'block' : 'none' }}>
                        <div className="row">
                            {products.length > 0 &&
                                products.slice(0, 8).map((product, pitem) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6" key={pitem}>
                                        <div className="product-box-items">
                                            <div className="product-image">
                                                <img src={product.proImg} alt="img" />
                                                <ul className="product-icon d-grid align-items-center">
                                                    <li>
                                                        <button
                                                            onClick={() => addToCartProduct(product)}><i className="fa-sharp fa-regular fa-eye"></i></button>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-regular fa-star"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}><i className="fa-regular fa-arrow-up-arrow-down"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="shop-btn">
                                                    <button
                                                        onClick={() => addToCartProduct(product)} className="theme-btn">Add To Cart</button>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="color-2 fa-solid fa-star"></i>
                                                </div>
                                                <h6><Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>{product.title}</Link></h6>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div id="Tab3" style={{ display: activeTab === 'Tab3' ? 'block' : 'none' }}>
                        <div className="row">
                            {products.length > 0 &&
                                products.slice(0, 8).map((product, pitem) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6" key={pitem}>
                                        <div className="product-box-items">
                                            <div className="product-image">
                                                <img src={product.proImg} alt="img" />
                                                <ul className="product-icon d-grid align-items-center">
                                                    <li>
                                                        <button
                                                            onClick={() => addToCartProduct(product)}><i className="fa-sharp fa-regular fa-eye"></i></button>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-regular fa-star"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}><i className="fa-regular fa-arrow-up-arrow-down"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="shop-btn">
                                                    <button
                                                        onClick={() => addToCartProduct(product)} className="theme-btn">Add To Cart</button>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="color-2 fa-solid fa-star"></i>
                                                </div>
                                                <h6><Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>{product.title}</Link></h6>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                    <div id="Tab4" style={{ display: activeTab === 'Tab4' ? 'block' : 'none' }}>
                        <div className="row">
                            {products.length > 0 &&
                                products.slice(0, 8).map((product, pitem) => (
                                    <div className="col-xl-3 col-lg-4 col-md-6" key={pitem}>
                                        <div className="product-box-items">
                                            <div className="product-image">
                                                <img src={product.proImg} alt="img" />
                                                <ul className="product-icon d-grid align-items-center">
                                                    <li>
                                                        <button
                                                            onClick={() => addToCartProduct(product)}><i className="fa-sharp fa-regular fa-eye"></i></button>
                                                    </li>
                                                    <li>
                                                        <a href="#">
                                                            <i className="fa-regular fa-star"></i>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}><i className="fa-regular fa-arrow-up-arrow-down"></i></Link>
                                                    </li>
                                                </ul>
                                                <div className="shop-btn">
                                                    <button
                                                        onClick={() => addToCartProduct(product)} className="theme-btn">Add To Cart</button>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="color-2 fa-solid fa-star"></i>
                                                </div>
                                                <h6><Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>{product.title}</Link></h6>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
                <div className="shop-button text-center mt-5 " >
                    <Link onClick={ClickHandler} to="/shop" className="theme-btn">View all Product</Link>
                </div>
            </div>
        </section>
    );
};

export default ProductSection;