import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST } from "../actions/type";
import { toast } from "react-toastify";

const init = {
  w_list: [],
};

export const wishListReducer = (state = init, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const productId = action.product.id;
      if (
        state.w_list.findIndex((product) => product.id === productId) !== -1
      ) {
        toast.error("Item Removed from Wishlist");
        const w_list = state.w_list.filter(
          (product) => product.id !== productId
        );
        return { ...state, w_list };
      }
      toast.success("Item Added to Wishlist");
      return {
        ...state,
        w_list: [
          ...state.w_list,
          {
            ...action.product,
          },
        ],
      };
    case REMOVE_FROM_WISHLIST:
      const w_productId = action.id;
      const w_list = state.w_list.filter(
        (product) => product.id !== w_productId
      );
      return { ...state, w_list };
    default:
      return state;
  }
};

export default wishListReducer;
