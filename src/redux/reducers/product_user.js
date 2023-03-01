import { GET_PRODUCT_BY_STATUS_SUCCESS } from "../constants/product_constant";

const initProduct = [];

export const product_user = (state = initProduct, action) => {
  switch (action.type) {
    case GET_PRODUCT_BY_STATUS_SUCCESS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
