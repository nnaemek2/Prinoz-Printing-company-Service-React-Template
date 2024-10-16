import React, {Fragment} from 'react';
import NavbarS2 from '../../components/NavbarS2/NavbarS2';
import PageTitle from "../../components/pagetitle/PageTitle";
import CheckoutSection from '../../components/CheckoutSection'
import {connect} from "react-redux";
import CtaSectionS2 from '../../components/CtaSectionS2/CtaSectionS2';
import FooterS3 from '../../components/footerS3/FooterS3';
import CursorMaus from '../../components/CursorMaus/CursorMaus';

const CheckoutPage =({cartList}) => {
    return(
        <Fragment>
            <NavbarS2 hclass={'header-section-2 style-two'} />
            <PageTitle pageTitle={'Digital printing Service'} pagesub={'Checkout'}/> 
            <CheckoutSection cartList={cartList}/>
            <CtaSectionS2 />
            <FooterS3 />
            <CursorMaus />
        </Fragment>
    )
};
const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(CheckoutPage);
