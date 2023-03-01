import * as cart_service from "../api/cart_service";
import { put, call } from "redux-saga/effects";
import { get_cart_success } from "../redux/actions/action_cart";

export function* get_all_cart() {
  try {
    let response = yield call(cart_service.get_all_carts);
    yield put(get_cart_success(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* post_new_cart(action) {
  try {
    yield call(cart_service.post_new_carts, action.payload);
  } catch (error) {
    let response = yield call(
      cart_service.get_cart_by_proid,
      action.payload.pro_id
    );
    yield call(cart_service.put_cart, {
      ...response.data[0],
      quantity: response.data[0].quantity + 1,
    });
    yield get_all_cart();
  }
}
export function* delete_cart(action) {
  try {
    yield call(cart_service.delete_cart, action.payload);
    yield get_all_cart();
  } catch (error) {
    console.log(error);
  }
}
export function* update_cart(action) {
  try {
    yield call(cart_service.put_cart, action.payload);
    console.log(action.payload);
    yield get_all_cart();
  } catch (error) {
    console.log(error);
  }
}
