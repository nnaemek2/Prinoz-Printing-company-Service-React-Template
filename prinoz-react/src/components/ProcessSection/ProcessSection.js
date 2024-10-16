import React from 'react';

import Ps1 from '../../img/feature/line-shape.png'
import Ps2 from '../../img/feature/natural.png'
import Ps3 from '../../img/feature/Group.png'
import Ps4 from '../../img/feature/printing1.png'
import Ps5 from '../../img/feature/printing1.png'
import Ps6 from '../../img/feature/growth1.png'

const ProcessSection = () => {
    return (
        <section className="feature-section-3 section-padding pt-0">
            <div className="container custom-container-2">
                <div className="fearure-wrapper-3">
                    <div className="line-shape">
                        <img src={Ps1} alt="img" />
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".2s">
                        <div className="feature-icon">
                            <img src={Ps2} alt="img" />
                        </div>
                        <div className="feature-content">
                            <h5>
                                Certified Print Shop<br/>
                                    100% Authentic
                            </h5>
                        </div>
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".4s">
                        <div className="feature-icon">
                            <img src={Ps3} alt="img" />
                        </div>
                        <div className="feature-content">
                            <h5>
                                Fast Delivery From 10<br/>
                                    Working Days
                            </h5>
                        </div>
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".6s">
                        <div className="feature-icon">
                            <img src={Ps4} alt="img" />
                        </div>
                        <div className="feature-content">
                            <h5>
                                Well- Founded Print<br/>
                                    Top - Service
                            </h5>
                        </div>
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".7s">
                        <div className="feature-icon">
                            <img src={Ps5} alt="img" />
                        </div>
                        <div className="feature-content">
                            <h5>
                                Flexible Orders<br/>
                                    Module
                            </h5>
                        </div>
                    </div>
                    <div className="feature-item wow fadeInUp" data-wow-delay=".8s">
                        <div className="feature-icon">
                            <img src={Ps6} alt="img" />
                        </div>
                        <div className="feature-content">
                            <h5>
                                Simple & Digital<br/>
                                    Process
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default ProcessSection;