////have mutiple reducer that combine in this index.js
import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";


const reducers = combineReducers({
    allProducts: productReducer, 
    product: selectedProductReducer,
})

export default reducers