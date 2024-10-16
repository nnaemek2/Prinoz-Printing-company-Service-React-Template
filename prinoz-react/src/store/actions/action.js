import * as types from "./type";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  REMOVE_FROM_COMPARE_LIST,
  ADD_TO_COMPARE,
} from "./type";

export const fetchProductsBegin = () => ({
  type: types.FETCH_PRODUCTS_BEGIN,
});

export const receiveProducts = (products) => ({
  type: types.RECEIVE_PRODUCTS,
  products,
});

export const addToCart = (product, qty, color, size) => (dispatch) => {
  toast.success(`${product.title} Added to Cart`);
  dispatch({
    type: types.ADD_TO_CART,
    product,
    qty,
    color,
    size,
  });
};

export const removeFromCart = (product_id) => (dispatch) => {
  toast.success("Item Removed from Cart");
  dispatch({
    type: types.REMOVE_FROM_CART,
    product_id,
  });
};

export const incrementQuantity = (product_id) => (dispatch) => {
  dispatch({
    type: types.INCREMENT_QUANTITY,
    product_id,
  });
};

export const decrementQuantity = (product_id) => (dispatch) => {
  dispatch({
    type: types.DECREMENT_QUANTITY,
    product_id,
  });
};

export const addToWishList = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_WISHLIST,
    product,
  });
};

export const removeFromWishList = (id) => (dispatch) => {
  toast.error("Item removed from WishList");
  dispatch({
    type: REMOVE_FROM_WISHLIST,
    id,
  });
};

export const addToCompareList = (product) => (dispatch) => {
  dispatch({
    type: ADD_TO_COMPARE,
    product,
  });
};
export const removeFromCompareList = (product) => (dispatch) => {
  dispatch({
    type: REMOVE_FROM_COMPARE_LIST,
    product,
  });
};
