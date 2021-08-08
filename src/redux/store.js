import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";
//import { composeWithDevTools } from 'redux-devtools-extension';
//import logger from 'redux-logger'

const store = createStore(reducers, 
    {}, 
    //composeWithDevTools(applyMiddleware(logger))
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
     );
export default store;