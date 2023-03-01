import { combineReducers } from "redux";
import { carts } from "./cart_reducer";
import { products } from "./product";
import { product_user } from "./product_user";
export const reducer = combineReducers({ products, product_user, carts });
