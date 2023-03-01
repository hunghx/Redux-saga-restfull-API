import * as cart_constant from "../constants/cart_constant";

export const get_all_cart = () => {
  return {
    type: cart_constant.GET_ALL_CART,
  };
};
export const get_cart_success = (data) => {
  return {
    type: cart_constant.GET_CART_SUCCESS,
    payload: data,
  };
};
export const post_new_cart = (data) => {
  return {
    type: cart_constant.POST_NEW_CART,
    payload: data,
  };
};
export const delete_cart = (id) => {
  return {
    type: cart_constant.DELETE_CART,
    payload: id,
  };
};
export const update_cart = (update_pro) => {
  return {
    type: cart_constant.UPDATE_CART,
    payload: update_pro,
  };
};
