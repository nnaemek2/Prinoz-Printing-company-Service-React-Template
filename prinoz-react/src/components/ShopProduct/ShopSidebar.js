import React from 'react';
import { Link } from 'react-router-dom';
import RangeBarCustom from './RangeBarCustom';
import FilterSize from './handleCheckboxChange';
import FilterStarRating from './FilterStarRating';


const ClickHandler = () => {
    window.scrollTo(10, 0);
};

const ShopSidebar = () => {


    return (
        <div className="shop-main-sidebar">
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h4>search here</h4>
                </div>
                <div className="search_widget">
                    <form action="#">
                        <input type="text" placeholder="search here" />
                        <button type="submit"><i className="fal fa-search"></i></button>
                    </form>
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h4>Catagories</h4>
                </div>
                <div className="shop-catagory-items">
                    <ul>
                        <li>
                            <Link onClick={ClickHandler} to="#">
                                <i className="fa-regular fa-chevron-left"></i>
                                Brochures & Catalogues
                            </Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} to="#">
                                <i className="fa-regular fa-chevron-left"></i>
                                Business Cards
                            </Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} to="#">
                                <i className="fa-regular fa-chevron-left"></i>
                                Calendars printing
                            </Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} to="#">
                                <i className="fa-regular fa-chevron-left"></i>
                                Design Online
                            </Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} to="#">
                                <i className="fa-regular fa-chevron-left"></i>
                                Flyers Design
                            </Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} to="#">
                                <i className="fa-regular fa-chevron-left"></i>
                                Folded Leaflets
                            </Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} to="#">
                                <i className="fa-regular fa-chevron-left"></i>
                                t-shirt printing
                            </Link>
                        </li>
                        <li>
                            <Link onClick={ClickHandler} to="#">
                                <i className="fa-regular fa-chevron-left"></i>
                                Gift item printing
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h4>Filter By Price</h4>
                </div>
                <RangeBarCustom />
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h4>Filter by size</h4>
                </div>
                <FilterSize />
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h4>Filter by Rating</h4>
                </div>
                <FilterStarRating/>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h4>Filter by Color</h4>
                </div>
                <ul className="color-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div className="single-sidebar-widget">
                <div className="wid-title">
                    <h4>Filter by Tag</h4>
                </div>
                <div className="shop-widget-tag">
                    <span>Sweat Shirt</span>
                    <span>Banner design</span>
                    <span>Brochure</span>
                    <span>Business Card</span>
                    <span>landing</span>
                    <span>Brochure</span>
                    <span>Tryptich Brochure</span>
                    <span>Cap</span>
                </div>
            </div>
        </div>

    );
};

export default ShopSidebar;