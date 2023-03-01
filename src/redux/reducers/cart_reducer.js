import { GET_CART_SUCCESS } from "../constants/cart_constant";

const initCart = [];

export const carts = (state = initCart, action) => {
  switch (action.type) {
    case GET_CART_SUCCESS:
      state = action.payload;
      return state;
    default:
      return state;
  }
};
