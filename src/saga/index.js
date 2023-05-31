import {all, takeEvery} from "redux-saga/effects"
import { findAllProducts } from "./productSaga"
import { deleteCart, findCart, postNewCart, updateCart } from "./cartSaga"
import { DELETE_CART, POST_NEW_CART, UPDATE_CART } from "../redux/constants/cart_constant"
export const rootSaga= function* (){
    yield all([
       takeEvery("GETALLPRODUCTS",findAllProducts),
       takeEvery("GETCART",findCart),
       takeEvery(POST_NEW_CART,postNewCart),
       takeEvery(DELETE_CART,deleteCart),
       takeEvery(UPDATE_CART,updateCart)
    ])
}