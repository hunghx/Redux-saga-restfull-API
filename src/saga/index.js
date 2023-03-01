import { all, takeLatest } from "redux-saga/effects";
import * as product_constants from "../redux/constants/product_constant";
import * as product_saga from "./product_saga";

export const rootSaga = function* () {
  yield all([
    takeLatest(product_constants.GET_ALL_PRODUCT, product_saga.get_all_product),
    takeLatest(
      product_constants.POST_NEW_PRODUCT,
      product_saga.post_new_product
    ),
    takeLatest(product_constants.DELETE_PRODUCT, product_saga.delete_product),
    takeLatest(product_constants.UPDATE_PRODUCT, product_saga.update_product),
  ]);
};
