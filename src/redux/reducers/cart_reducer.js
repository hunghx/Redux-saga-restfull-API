

const initCart = {
  listProduct:[],
  cart:[]
};

export const carts = (state = initCart, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCT":
      return {...state, listProduct: action.payload };
      case "GET_CART_SUCCESS":
        return {...state, cart: action.payload };
        case "ADD_TO_CART_SUCCESS":
          return {...state, cart: [...state.cart, action.payload] };
    default:
      return state;
  }
};
