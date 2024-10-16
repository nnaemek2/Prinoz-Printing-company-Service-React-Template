import React from 'react';
import InfIcon1 from '../../img/icon/location.png'
import InfIcon2 from '../../img/icon/12.svg'
import InfIcon3 from '../../img/icon/13.svg'
import ContactForm from '../ContactFrom/ContactForm';
// import ContactForm from '../ContactFrom/ContactForm'


const Contactpage = () => {

    return (
        <div>
            <section className="contact-info-section fix section-padding section-bg-2">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="contact-info-items text-center">
                                <div className="icon">
                                    <img src={InfIcon1} alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h3>address line</h3>
                                    <p>
                                        Bowery St, New York, 37 USA <br />
                                        NY 10013,USA
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                            <div className="contact-info-items active text-center">
                                <div className="icon">
                                    <img src={InfIcon2} alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h3>Phone Number</h3>
                                    <p>
                                        +1255 - 568 - 6523 4374-221 <br />
                                        +1255 - 568 - 6523
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                            <div className="contact-info-items text-center">
                                <div className="icon">
                                    <img src={InfIcon3} alt="icon-img" />
                                </div>
                                <div className="content">
                                    <h3>Mail Adress</h3>
                                    <p>
                                        email@example.com <br />
                                        info@yourdomain.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="contact-section section-padding pt-0 section-bg-2">
                <div className="container">
                    <div className="contact-area">
                        <div className="row justify-content-between">
                            <div className="col-xl-6 col-lg-6">
                                <div className="map-content-area">
                                    <h3 className="wow fadeInUp" data-wow-delay=".3s"> Get In Touch</h3>
                                    <p className="wow fadeInUp" data-wow-delay=".5s">
                                        Lorem ipsum dolor sit amet consectetur adipiscing elit mattis <br/>
                                            faucibus odio feugiat arc dolor.
                                    </p>
                                    <div className="google-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" ></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 mt-5 mt-lg-0">
                                <div className="contact-form-items">
                                    <div className="contact-title">
                                        <h3 className="wow fadeInUp" data-wow-delay=".3s">Fill Up The Form</h3>
                                        <p className="wow fadeInUp" data-wow-delay=".5s">Your email address will not be published. Required fields are marked *</p>
                                    </div>
                                    
                                    <ContactForm/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )

}

export default Contactpage;
