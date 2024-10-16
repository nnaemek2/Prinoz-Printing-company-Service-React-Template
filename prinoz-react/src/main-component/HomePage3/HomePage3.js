import React, { Fragment } from 'react';
import NavbarS3 from '../../components/NavbarS3/NavbarS3'
import Hero3 from '../../components/hero3/hero3';
import BrandSectionS2 from '../../components/BrandSectionS2/BrandSectionS2';
import ProductSectionS5 from '../../components/ProductSectionS5/ProductSectionS5';
import About3 from '../../components/about3/about3';
import MarqueeSectionS4 from '../../components/MarqueeSectionS4/MarqueeSectionS4';
import ServiceSectionS3 from '../../components/ServiceSectionS3/ServiceSectionS3';
import ShopBannerSectionS2 from '../../components/ShopBannerSectionS2/ShopBannerSectionS2';
import ProcessSectionS2 from '../../components/ProcessSectionS2/ProcessSectionS2';
import ProjectSectionS3 from '../../components/ProjectSectionS3/ProjectSectionS3';
import ProductSectionS4 from '../../components/ProductSectionS4/ProductSectionS4';
import FeatureSectionS2 from '../../components/FeatureSectionS2/FeatureSectionS2';
import TestimonialSectionS3 from '../../components/TestimonialSectionS3/TestimonialSectionS3';
import BlogSectionS3 from '../../components/BlogSectionS3/BlogSectionS3';
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/action";
import api from "../../api";
import FooterS3 from '../../components/footerS3/FooterS3';
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const HomePage3 = ({ addToCart }) => {
    const productsArray = api();
    const products = productsArray


    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    return (
        <Fragment>
            <NavbarS3 hclass={'header-section'} />
            <Hero3 />
            <BrandSectionS2 />
            <ProductSectionS5 products={products} />
            <About3 />
            <MarqueeSectionS4 />
            <ServiceSectionS3 />
            <ShopBannerSectionS2 />
            <ProcessSectionS2 />
            <ProjectSectionS3 />
            <ProductSectionS4
                addToCartProduct={addToCartProduct}
                products={products}
            />
            <FeatureSectionS2 />
            <TestimonialSectionS3 />
            <BlogSectionS3 hclass={'blog-section-3 section-padding'} SubClass="blog-wrapper" />
            <CtaSectionS2 />
            <FooterS3 />
            <CursorMaus />
        </Fragment>
    )
};
export default connect(null, { addToCart })(HomePage3);