import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ShopSidebar from "./ShopSidebar";

const ShopProduct = ({ products, addToCartProduct }) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    const [sortOption, setSortOption] = useState('1');
    const [currentPage, setCurrentPage] = useState(1);
    const resultsPerPage = 12; 


    const totalResults = products.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);


    const handleSortChange = (e) => {
        setSortOption(e.target.value);
    };


    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo(0, 0); 
    };


    const startIndex = (currentPage - 1) * resultsPerPage;
    const currentProducts = products.slice(startIndex, startIndex + resultsPerPage);

    const [activeTab, setActiveTab] = useState('Tab1');
    const openTab = (TabName) => {
        setActiveTab(TabName);
    };

    useEffect(() => {
        openTab('Tab1');
    }, []);

    return (
        <section className="shop-page-section fix section-padding section-bg-2">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4 order-2 order-md-1">
                        <ShopSidebar />
                    </div>
                    <div className="col-xl-9 col-lg-8 order-1 order-md-2">
                        <div className="woocommerce-notices-wrapper">
                            <p>Showing <span>{resultsPerPage}</span> of {totalResults} Results</p>
                            <div className="form-clt">
                                <div className="nice-select">
                                    <select name="sort" value={sortOption} onChange={handleSortChange}>
                                        <option value="1">Default Sorting</option>
                                        <option value="2">Sort by popularity</option>
                                        <option value="3">Sort by average rating</option>
                                        <option value="4">Sort by latest</option>
                                    </select>
                                </div>
                                <div className="icon">
                                    <button
                                        className={`tab ${activeTab === 'Tab1' ? 'active' : ''}`}
                                        onClick={() => openTab('Tab1')}
                                    >
                                        <i className="fas fa-list"></i>
                                    </button>
                                </div>
                                <div className="icon">
                                    <button
                                        className={`tab ${activeTab === 'Tab2' ? 'active' : ''}`}
                                        onClick={() => openTab('Tab2')}
                                    >
                                        <i className="fas fa-th-large"></i>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {currentProducts.length > 0 &&
                                currentProducts.map((product, pitem) => (
                                    <div className="col-lg-4 col-md-6 col-12" key={pitem} style={{ display: activeTab === 'Tab1' ? 'block' : 'none' }}>
                                        <div className="product-box-items">
                                            <div className="product-image">
                                                <img src={product.proImg} alt="img" />
                                                <ul className="product-icon d-grid align-items-center">
                                                    <li>
                                                        <button onClick={(ClickHandler) => addToCartProduct(product)}>
                                                            <i className="fa-sharp fa-regular fa-eye"></i>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="#"><i className="fa-regular fa-star"></i></Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>
                                                            <i className="fa-regular fa-arrow-up-arrow-down"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="shop-btn">
                                                    <button onClick={() => addToCartProduct(product)} className="theme-btn">
                                                        Add To Cart
                                                    </button>
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
                                                <h6>
                                                    <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>
                                                        {product.title}
                                                    </Link>
                                                </h6>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                        <div className="row">
                            {currentProducts.length > 0 &&
                                currentProducts.slice(0,5).map((product, pitem) => (
                                    <div className="col-lg-6 col-md-12" key={pitem} style={{ display: activeTab === 'Tab2' ? 'block' : 'none' }}>
                                        <div className="product-box-items">
                                            <div className="product-image">
                                                <img src={product.proImg} alt="img" />
                                                <ul className="product-icon d-grid align-items-center">
                                                    <li>
                                                        <button onClick={() => addToCartProduct(product)}>
                                                            <i className="fa-sharp fa-regular fa-eye"></i>
                                                        </button>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to="#"><i className="fa-regular fa-star"></i></Link>
                                                    </li>
                                                    <li>
                                                        <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>
                                                            <i className="fa-regular fa-arrow-up-arrow-down"></i>
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <div className="shop-btn">
                                                    <button onClick={() => addToCartProduct(product)} className="theme-btn">
                                                        Add To Cart
                                                    </button>
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
                                                <h6>
                                                    <Link onClick={ClickHandler} to={`/shop-details/${product.slug}`}>
                                                        {product.title}
                                                    </Link>
                                                </h6>
                                                <span>{product.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div className="page-nav-wrap mt-5 text-center">
                            <ul>
                                <li>
                                    <button
                                        className="page-numbers"
                                        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                    >
                                        <i className="fa-solid fa-chevrons-left"></i>
                                    </button>
                                </li>
                                {Array.from({ length: totalPages }, (_, i) => (
                                    <li key={i}>
                                        <button
                                            className={`page-numbers ${currentPage === i + 1 ? 'active' : ''}`}
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}
                                <li>
                                    <button
                                        className="page-numbers"
                                        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                    >
                                        <i className="fa-solid fa-chevrons-right"></i>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ShopProduct;
