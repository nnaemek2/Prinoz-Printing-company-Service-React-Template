import {ADD_TO_COMPARE, REMOVE_FROM_COMPARE_LIST} from "../actions/type";
import {toast} from "react-toastify";

const init = {
    compare_list: []
};

const compareListReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_TO_COMPARE:
            const productId = action.product.id;
            if (state.compare_list.findIndex(product => product.id === productId) !== -1) {
                toast.warn('Already added to Compare List');
                return state;
            }
            toast.success('Added to Compare List');
            return {
                ...state,
                compare_list: [
                    ...state.compare_list,
                    action.product
                ]
            };

        case REMOVE_FROM_COMPARE_LIST:
            const rm_productId = action.product.id;
            if (state.compare_list.findIndex(product => product.id === rm_productId) !== -1) {
                toast.warn('Item Removed from Compare List');
                const compareLIst = state.compare_list.filter(product => product.id !== rm_productId);
                return {...state, compare_list: compareLIst};
            }
            toast.success('Target no Found');
            return state;

        default:
            return state;
    }
};

export default compareListReducer;