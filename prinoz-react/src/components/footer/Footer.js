import React from 'react';
import { Link } from 'react-router-dom';
import Services from "../../api/Services";

import Fi1 from '../../img/footer/dot.png'
import Fi2 from '../../img/footer/footer-shape-1.png'
import Fi3 from '../../img/footer/footer-shape-2.png'
import Logo from '../../img/logo/black-logo.svg'
import Fi4 from '../../img/QRcode.png'
import Fi5 from '../../img/apple.png'
import Fi6 from '../../img/play-store.png'
import Fi7 from '../../img/card.png'

const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="dot-shape">
                <img src={Fi1} alt="img" />
            </div>
            <div className="footer-shape-1">
                <img src={Fi2} alt="img" />
            </div>
            <div className="footer-shape-2">
                <img src={Fi3} alt="img" />
            </div>
            <div className="container">
                <div className="footer-widgets-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-4" >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link onClick={ClickHandler} to="/home">
                                        <img src={Logo} alt="logo-img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        A new way to make the payments easy,
                                        reliable and 100% secure. claritatem itamconse quat. Exerci tation ullamcorper.
                                    </p>
                                    <ul className="contact-list">
                                        <li>
                                            <i className="fa-sharp fa-solid fa-phone-volume"></i>
                                            <a href="tel:+8060008899">+806 (000) 88 99</a>
                                        </li>
                                        <li>
                                            <i className="fa-sharp fa-solid fa-envelope"></i>
                                            <a onClick={ClickHandler} href="mailto:contact@info.com" className="link">contact@info.com</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 ps-lg-5 col-sm-6 col-md-6 col-lg-4">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Usefull Links</h3>
                                </div>
                                <ul className="list-items">
                                    {Services.slice(0, 5).map((service, sitem) => (
                                        <li key={sitem}>
                                        <Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>
                                                {service.title}
                                        </Link>
                                    </li>
                                    ))} 
                                   
                                 
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 ps-lg-4 col-sm-6 col-md-6 col-lg-4" >
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Community</h3>
                                </div>
                                <ul className="list-items">
                                    <li>
                                        <Link onClick={ClickHandler} to="/contact">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/contact">
                                            Partners
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/contact">
                                            Suggestions
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/news">
                                            Blog
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/contact">
                                            Newsletters
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-md-6 col-lg-4">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <h3>Get In Touch</h3>
                                </div>
                                <div className="footer-content">
                                    <div className="scan-items">
                                        <div className="scan-img">
                                            <img src={Fi4} alt="img" />
                                        </div>
                                        <ul className="store-list">
                                            <li>
                                                <Link onClick={ClickHandler} to="/contact">
                                                    <img src={Fi5} alt="img" />
                                                    App Store
                                                </Link>
                                            </li>
                                            <li className="active">
                                                <Link onClick={ClickHandler} to="/contact">
                                                    <img src={Fi6} alt="img" />
                                                    Google play
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="brand-logo">
                                        <img src={Fi7} alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <Link onClick={ClickHandler} to="/" id="scrollUp" className="scroll-icon">
                        <i className="fa-solid fa-chevrons-up"></i>
                    </Link>
                    <div className="footer-wrapper d-flex align-items-center justify-content-between">
                        <p className="fadeInLeft color-2" >
                            Copyright <span>@2024</span> <Link onClick={ClickHandler} to="/">wpoceans</Link> All Rights Reserved
                        </p>
                        <div className="social-icon d-flex align-items-center fadeInRight" >
                            <Link onClick={ClickHandler} to="/"><i className="fab fa-facebook-f"></i></Link>
                            <Link onClick={ClickHandler} to="/"><i className="fa-brands fa-vimeo-v"></i></Link>
                            <Link onClick={ClickHandler} to="/"><i className="fab fa-twitter"></i></Link>
                            <Link onClick={ClickHandler} to="/"><i className="fa-brands fa-linkedin-in"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;