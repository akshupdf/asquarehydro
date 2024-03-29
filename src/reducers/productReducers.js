import { FETCH_PRODUCTS_FAILURE,FETCH_PRODUCTS_SUCCESS } from "../actions/actionTypes";

const initialState = {
    products: [],
    error: null,
};

export const productReducer = (state = initialState, action) =>{
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
          return {
            ...state,
            products: action.payload,
            error: null,
          };
        case FETCH_PRODUCTS_FAILURE:
            return {
              ...state,
              products: [],
              error: action.payload
            };
        default:
            return state;
    }
}