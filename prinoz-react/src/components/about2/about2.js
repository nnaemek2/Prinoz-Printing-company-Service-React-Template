import React from 'react'
import { Link } from 'react-router-dom'
import abImg from '../../img/about/t-shirt.png'
import abImg1 from '../../img/about/shape-1.png'
import abImg2 from '../../img/about/mug1.png'
import abImg3 from '../../img/about/color_cycle.png'
import abImg4 from '../../img/about/sticer.png'
import abImg5 from '../../img/about/shape-2.png'
import Line from '../../img/line.png'
import author from '../../img/about/author.png'
import Line2 from '../../img/about/line.png'


const About2 = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <section className={"" +props.hclass}>
            <div className="container">
                <div className="about-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image-items">
                                <div className="about-image wow img-custom-anim-top" >
                                    <img src={abImg} alt="img" />
                                </div>
                                <div className="shape-1">
                                    <img src={abImg1} alt="img" />
                                </div>
                                <div className="shape-2">
                                    <img src={abImg2} alt="img" />
                                </div>
                                <div className="shape-3">
                                    <img src={abImg3} alt="img" />
                                </div>
                                <div className="shape-4">
                                    <img src={abImg4} alt="img" />
                                </div>
                                <div className="shape-5">
                                    <img src={abImg5} alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">More about us</h6>
                                    <h2 className="wow fadeInUp" >
                                        Create Stunning Print For
                                        <span> Your Business <img src={Line} alt="img" /></span>
                                    </h2>
                                </div>
                                <p className="mt-3 mt-md-0 wow fadeInUp" >
                                    A full administration printing background. Print shirts for yourself
                                    or your online business Beautiful, customizable template,
                                </p>
                                <ul className="about-list wow fadeInUp">
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Large paper & stock selection & Unique Print
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Printing programs tailored to your company ne
                                    </li>
                                    <li>
                                        <i className="fa-solid fa-check"></i>
                                        Customer places their order Connect your store
                                    </li>
                                </ul>
                                <div className="about-author">
                                    <Link onClick={ClickHandler} to="/about" className="theme-btn wow fadeInUp" >more about us</Link>
                                    <div className="author-image wow fadeInUp" >
                                        <img src={author} alt="author-img" />
                                            <div className="content">
                                            <span>10m+ Trusted Global clients <img src={Line2} alt="img" /></span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About2;