import * as product_constant from "../constants/product_constant";

export const get_all_product = () => {
  return {
    type: product_constant.GET_ALL_PRODUCT,
  };
};
export const get_product_success = (data) => {
  return {
    type: product_constant.GET_PRODUCT_SUCCESS,
    payload: data,
  };
};
export const post_new_product = (data) => {
  return {
    type: product_constant.POST_NEW_PRODUCT,
    payload: data,
  };
};
export const delete_product = (id) => {
  return {
    type: product_constant.DELETE_PRODUCT,
    payload: id,
  };
};
export const update_product = (update_pro) => {
  return {
    type: product_constant.UPDATE_PRODUCT,
    payload: update_pro,
  };
};
export const get_product_by_status = () => {
  return {
    type: product_constant.GET_PRODUCT_BY_STATUS,
  };
};
export const get_product_by_status_success = (data) => {
  return {
    type: product_constant.GET_PRODUCT_BY_STATUS_SUCCESS,
    payload: data,
  };
};
