import { GET_PRODUCT_SUCCESS } from "../constants/product_constant";

const initProduct = [];

export const products = (state = initProduct, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
