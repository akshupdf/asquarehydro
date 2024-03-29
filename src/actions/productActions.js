import { FETCH_PRODUCTS_SUCCESS , FETCH_PRODUCTS_FAILURE } from "./actionTypes";


export const fetchProductsSuccess = (product) => ({
    type : FETCH_PRODUCTS_SUCCESS,
    payload : product
})

export const fetchProductsFailure = (error) => ({
    type : FETCH_PRODUCTS_FAILURE,
    payload : error
})




