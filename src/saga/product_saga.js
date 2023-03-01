import { call, put } from "redux-saga/effects";
import * as product_service from "../api/product_services";
import { get_product_success } from "../redux/actions/actions_product";

export function* get_all_product() {
  try {
    let response = yield call(product_service.get_all_products);

    yield put(get_product_success(response.data));
  } catch (error) {
    console.log("err ==>", error);
  }
}
export function* post_new_product(action) {
  try {
    yield call(product_service.post_new_products, action.payload);

    yield get_all_product();
  } catch (error) {
    console.log(error);
  }
}

export function* delete_product(action) {
  try {
    yield call(product_service.delete_product, action.payload);
    yield get_all_product();
  } catch (error) {
    console.log(error);
  }
}
export function* update_product(action) {
  try {
    yield call(product_service.put_product, action.payload);
    yield get_all_product();
  } catch (error) {
    console.log(error);
  }
}
