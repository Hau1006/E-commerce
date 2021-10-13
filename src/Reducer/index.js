import { combineReducers } from "redux";
import products from './ProductReducer'
const root = combineReducers({
    products,

});

export default root;