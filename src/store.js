import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { cartReducers } from "./reducers/cartReducers";
import { orderReducers } from "./reducers/orderReducers";
import { productsReducers } from "./reducers/productReducers";

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    products: productsReducers,
    cart: cartReducers,
    order: orderReducers,
  }),
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
