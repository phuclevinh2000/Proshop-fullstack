import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  productListReducer,
  productDetailsReducer,
} from './reducer/productReducer.js';
import { cartReducer } from './reducer/cartReduders.js';
import { userLoginReducer, userRegisterReducer, userDetailReducer, userUpdateProfileReducer } from './reducer/userReducers.js';
import { orderCreateReducer } from './reducer/orderReducer.js';

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

const userInfoFromStorage = localStorage.getItem('userInfo')
? JSON.parse(localStorage.getItem('userInfo'))
: null;

const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
? JSON.parse(localStorage.getItem('shippingAddress'))
: {};

const initialState = {
  cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
  userLogin: { userInfo: userInfoFromStorage}
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
); //composewithdevtool is for redux dev tool extension

export default store;
