import { CART_QTY_DEC, CART_QTY_INC, CART_EMPTY } from "../actionTypes";

export const cartDec = (payload) => ({
  type: CART_QTY_DEC,
  payload,
});
export const cartInc = (payload) => ({
  type: CART_QTY_INC,
  payload,
});
export const cartEmptyAction = () => ({
  type: CART_EMPTY,
});
