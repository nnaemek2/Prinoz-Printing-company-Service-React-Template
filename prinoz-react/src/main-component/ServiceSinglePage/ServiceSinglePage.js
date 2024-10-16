import React, { Fragment } from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from '../../components/pagetitle/PageTitle'
import { useParams } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo/VideoModal';
import Services from '../../api/Services';
import ServiceSidebar from './sidebar'
import Accordion from '../../components/Accordion/Accordion'
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import FooterS3 from '../../components/footerS3/FooterS3';
import CursorMaus from '../../components/CursorMaus/CursorMaus';
import Video from '../../img/service/details-2.jpg'
import simg1 from '../../img/service/details-3.jpg'
import simg2 from '../../img/service/details-4.jpg'
import simg3 from '../../img/service/details-5.jpg'
import simg4 from '../../img/service/details-6.jpg'

const ServiceSinglePage = (props) => {
    const { slug } = useParams()

    const serviceDetails = Services.find(item => item.slug === slug)

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }
    return (
        <Fragment>
            <NavbarS2 hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={serviceDetails.title} />
            <section className="service-details-section fix section-padding section-bg-2">
                <div className="container">
                    <div className="service-details-wrapper">
                        <div className="row g-5">
                            <div className="col-lg-4 order-2 order-md-1">
                                <ServiceSidebar />
                            </div>
                            <div className="col-lg-8 order-1 order-md-2">
                                <div className="service-details-image">
                                    <img src={serviceDetails.sSImg} alt="img" />
                                </div>
                                <div className="service-details-content">
                                    <h3>{serviceDetails.title}</h3>
                                    <p className="mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat qui ducimus illum modi?  perspiciatis
                                        accusamus soluta perferendis, ad illum, nesciunt, reiciendis iusto et cupidit Repudiandae provident to
                                        consectetur, sapiente, libero iure necessitatibus corporis nulla voluptate, quisquam aut perspiciatis?
                                        Fugiat labore aspernatur eius, perspiciatis ut molestiae, delectus rem.
                                    </p>
                                    <h3 className="mt-5 split-text right">Sed Ut Perspiciatis Unde Omnis Iste Natus Et</h3>
                                    <p className="mt-3">
                                        Need something changed or is there something not quite working the way you envisaged? Is your van a
                                        little old and tired and need refreshing? Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an
                                        unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not
                                        only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                    </p>
                                    <div className="service-details-video">
                                        <div className="row g-4 align-items-center">
                                            <div className="col-lg-6">
                                                <div className="video-image">
                                                    <img src={Video} alt="img" />
                                                    <div className="video-box">
                                                        <VideoModal/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="details-video-content">
                                                    <h3 className="mb-3 split-text right">Why Marketing Important ?</h3>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetur adipisici
                                                        sed do eiusmod tempor incididunt ut labore et
                                                    </p>
                                                    <ul>
                                                        <li>
                                                            <i className="fa-solid fa-circle-check"></i>
                                                            Research beyond the business plan
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-circle-check"></i>
                                                            Marketing options and rates
                                                        </li>
                                                        <li>
                                                            <i className="fa-solid fa-circle-check"></i>
                                                            The ability to turnaround consulting
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        There are many variations of passages of lorem ipsum is simply free text available in the market, but the
                                        majority time you put aside to be in our office. Lorem ipsum dolor sit amet, consectetLorem ipsum dolor sit
                                        amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                        dolore magna aliqua.
                                    </p>
                                    <div className="highlight-text">
                                        <h5>
                                            Business is the activity of making one's living or making money by produ The NDIS <br />
                                            Cing or buying and selling products akes a lifetime</h5>
                                    </div>
                                    <div className="service-image-item">
                                        <div className="row g-4">
                                            <h3>Eligibility Checklist :</h3>
                                            <div className="col-lg-7">
                                                <div className="service-box-image">
                                                    <img src={simg1} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="service-box-image">
                                                    <img src={simg2} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="service-box-image">
                                                    <img src={simg3} alt="img" />
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="service-box-image">
                                                    <img src={simg4} alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="faq-wrapper style-2">
                                        <div className="faq-content">
                                            <div className="faq-accordion">
                                                <Accordion />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CtaSectionS2 />
            <FooterS3 />
            <CursorMaus />
        </Fragment>
    )
};
export default ServiceSinglePage;
