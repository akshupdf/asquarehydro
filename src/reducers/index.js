import {combineReducers} from 'redux';
import { productReducer } from '../reducers/productReducers.js';

const rootReducer = combineReducers({
    products: productReducer
})

export default rootReducer;