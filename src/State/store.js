import { legacy_createStore  ,applyMiddleware , combineReducers} from "redux";
import { thunk } from 'redux-thunk';
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer , product1HomeReducer, products10HomeReducer, products11HomeReducer, products3HomeReducer, products4HomeReducer, products5HomeReducer, products6HomeReducer, products7HomeReducer, products8HomeReducer, products9HomeReducer } from "./Product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { cartItemsReducer } from "./CartItem/Reducer";
import { adminReducer } from "./Admin/Reducer";





const rootReducers = combineReducers({
    auth: authReducer, 
    products: customerProductReducer,
    cart: cartReducer, 
    order: orderReducer ,
    cartItems: cartItemsReducer,
    admin: adminReducer, 
    productsHomePage1: product1HomeReducer,
    products3HomeReducer: products3HomeReducer,
    products4HomeReducer: products4HomeReducer,
    products5HomeReducer : products5HomeReducer ,
    products6HomeReducer: products6HomeReducer,
    products7HomeReducer: products7HomeReducer,
    products8HomeReducer: products8HomeReducer,
    products9HomeReducer : products9HomeReducer ,
    products10HomeReducer : products10HomeReducer ,
    products11HomeReducer : products11HomeReducer ,
    
    
    
    
    
})

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk ))