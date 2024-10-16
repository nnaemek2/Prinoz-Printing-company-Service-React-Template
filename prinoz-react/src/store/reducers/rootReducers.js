import {combineReducers} from 'redux'
import productReducer from "./products";
import {cartReducer} from "./cart";
import {wishListReducer} from "./wishList";
import compareListReducer from "./compare";


const rootReducer = combineReducers({
    data: productReducer,
    cartList: cartReducer,
    wishList: wishListReducer,
    compareList: compareListReducer
});

export default rootReducer;