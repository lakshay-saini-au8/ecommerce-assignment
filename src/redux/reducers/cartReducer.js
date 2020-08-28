import { CART_EMPTY, CART_QTY_INC, CART_QTY_DEC } from "../actionTypes";

const initialState = {
  cart: [
    {
      id: 1,
      name: "White Modern Chair",
      src: "https://m.media-amazon.com/images/I/71pXoRVW9tL._AC_UL320_.jpg",
      org: 100,
      price: 100,
      qty: 1,
    },
    {
      id: 2,
      name: "Minimal Plant Pot",
      src: "https://m.media-amazon.com/images/I/61u1JF9oqOL._AC_UL320_.jpg",
      org: 200,
      price: 200,
      qty: 1,
    },
    {
      id: 3,
      name: "Minimal Black Pot",
      src: "https://m.media-amazon.com/images/I/41m+lehFLIL._AC_UL320_.jpg",
      org: 300,
      price: 300,
      qty: 1,
    },
    {
      id: 4,
      name: "Lights",
      src: "https://m.media-amazon.com/images/I/71rd4RzGtuL._AC_UL320_.jpg",
      org: 400,
      price: 400,
      qty: 1,
    },
  ],
};

const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CART_QTY_INC:
      let updatedArr = state.cart.map((item) => {
        if (item.id === payload) {
          item.qty = item.qty + 1;
          item.price = item.price + item.org;
        }
        return item;
      });
      return { ...state, cart: updatedArr };
    case CART_QTY_DEC:
      let decNewArr = state.cart.filter((item) => {
        if (item.id === payload) {
          if (item.qty === 1) {
            return false;
          } else {
            item.qty = item.qty - 1;
            item.price = item.price - item.org;
          }
        }
        return true;
      });
      return { ...state, cart: decNewArr };
    case CART_EMPTY:
      return { ...state, cart: null };

    default:
      return state;
  }
};

export default cartReducer;
