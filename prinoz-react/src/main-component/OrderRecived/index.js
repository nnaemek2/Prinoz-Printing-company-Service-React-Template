import React, {Fragment} from 'react';
import { connect } from "react-redux";
import OrderRecivedSec from '../../components/OrderRecivedSec';


const OrderRecived =({cartList}) => {


    return(
        <Fragment>
             <OrderRecivedSec cartList={cartList}/>
        </Fragment>
    )
};

const mapStateToProps = state => {
    return {
        cartList: state.cartList.cart,
        symbol: state.data.symbol
    }
};

export default connect(mapStateToProps)(OrderRecived);
