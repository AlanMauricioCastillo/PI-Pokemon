import { ORDER_DES } from "./index";

export function orderDes(payload) {
  return function (dispatch) {
    dispatch({ type: ORDER_DES, payload: payload });
  };
}
