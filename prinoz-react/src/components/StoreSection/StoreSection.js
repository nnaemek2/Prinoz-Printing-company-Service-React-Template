import React from 'react';

import SS1 from '../../img/feature/fulfillment.png'
import SS2 from '../../img/feature/medal.png'
import SS3 from '../../img/feature/agile.png'
import SS4 from '../../img/feature/order.png'

const StoreSection = () => {
    return (
        <section className="feature-section section-padding pt-0">
            <div className="container custom-container">
                <div className="feature-wrapper-2">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="feature-box-items-2 text-center">
                                <div className="icon">
                                    <img src={SS1} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>Local fulfillment</h3>
                                    <p>
                                        Connect your store to Printes, added
                                        products, and set your own retail
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="feature-box-items-2 text-center">
                                <div className="icon bg-2">
                                    <img src={SS2} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>Reliable quality</h3>
                                    <p>
                                        Connect your store to Printes, added
                                        products, and set your own retail
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="feature-box-items-2 text-center">
                                <div className="icon bg-3">
                                    <img src={SS3} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>Smooth automation</h3>
                                    <p>
                                        Connect your store to Printes, added
                                        products, and set your own retail
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="feature-box-items-2 text-center">
                                <div className="icon bg-4">
                                    <img src={SS4} alt="img" />
                                </div>
                                <div className="content">
                                    <h3>No order minimums</h3>
                                    <p>
                                        Connect your store to Printes, added
                                        products, and set your own retail
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StoreSection;