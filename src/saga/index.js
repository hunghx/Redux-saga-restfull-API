import { all, takeLatest } from "redux-saga/effects";
import * as product_constants from "../redux/constants/product_constant";
import * as cart_constants from "../redux/constants/cart_constant";
import * as product_saga from "./product_saga";
import * as cart_saga from "./cart_saga";

export const rootSaga = function* () {
  yield all([
    takeLatest(product_constants.GET_ALL_PRODUCT, product_saga.get_all_product),
    takeLatest(
      product_constants.POST_NEW_PRODUCT,
      product_saga.post_new_product
    ),
    takeLatest(product_constants.DELETE_PRODUCT, product_saga.delete_product),
    takeLatest(product_constants.UPDATE_PRODUCT, product_saga.update_product),
    takeLatest(
      product_constants.GET_PRODUCT_BY_STATUS,
      product_saga.get_product_by_status
    ),

    takeLatest(cart_constants.GET_ALL_CART, cart_saga.get_all_cart),
    takeLatest(cart_constants.POST_NEW_CART, cart_saga.post_new_cart),
    takeLatest(cart_constants.DELETE_CART, cart_saga.delete_cart),
    takeLatest(cart_constants.UPDATE_CART, cart_saga.update_cart),
  ]);
};
