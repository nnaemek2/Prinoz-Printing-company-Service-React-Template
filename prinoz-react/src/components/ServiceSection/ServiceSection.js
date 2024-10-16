import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.min.css';
import { Link } from 'react-router-dom'
import Services from "../../api/Services";

import Shape from '../../img/service/shape.png'
import Shape2 from '../../img/line.png'


const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const ServiceSection = (props) => {
    useEffect(() => {
        const serviceSlider = new Swiper('.service-slider', {
            spaceBetween: 30,
            speed: 2000,
            loop: true,
            autoplay: {
                delay: 1000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.dot',
                clickable: true,
            },
            navigation: {
                nextEl: '.array-next',
                prevEl: '.array-prev',
            },
            breakpoints: {
                1399: {
                    slidesPerView: 5,
                },
                1199: {
                    slidesPerView: 4,
                },
                991: {
                    slidesPerView: 3,
                },
                767: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 2,
                },
                0: {
                    slidesPerView: 1,
                },
            },
        });
    }, []);


    return (
        <section className={"" + props.hclass} style={{ backgroundImage: `url(${props.Bg})` }}>
            <div className="shape-image">
                <img src={Shape} alt="img" />
            </div>
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <h6 className="wow fadeInUp">More service us</h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">
                            Create Stunning Print for<br />
                            <span> Your Business <img src={Shape2} alt="img" /></span>
                        </h2>
                    </div>
                    <Link onClick={ClickHandler} to="/service" className="theme-btn wow fadeInUp" data-wow-delay=".5s">See all Services</Link>
                </div>
            </div>
            <div className="service-wrapper">
                <div className="swiper service-slider">
                    <div className="swiper-wrapper">
                        {Services.slice(0, 6).map((service, sitem) => (
                            <div className="swiper-slide" key={sitem}>
                                <div className="service-card-items">
                                    <div className="service-cotent">
                                        <h3><Link onClick={ClickHandler} to={`/service-details/${service.slug}`}>{service.title}</Link></h3>
                                        <p>{service.description}</p>
                                    </div>
                                    <div className="service-image">
                                        <img src={service.sImg} alt="img" />
                                    </div>
                                    <div className="service-btn">
                                        <Link onClick={ClickHandler} to={`/service-details/${service.slug}`} className="link-btn">Read Out More <i className="fa-solid fa-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
}

export default ServiceSection;
