import React, { Fragment } from 'react';
import { connect } from "react-redux";
import PageTitle from '../../components/pagetitle/PageTitle'
import { addToCart } from "../../store/actions/action";
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import FooterS3 from '../../components/footerS3/FooterS3';
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const ShopPage = ({ addToCart }) => {

    const productsArray = api();

    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
    };

    const products = productsArray

    return (
        <Fragment>
            <NavbarS2 hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={'Shop'} />
            <ShopProduct
                addToCartProduct={addToCartProduct}
                products={products} />
            <CtaSectionS2 />
            <FooterS3 />
            <CursorMaus />
        </Fragment>
    )
};

export default connect(null, { addToCart })(ShopPage);