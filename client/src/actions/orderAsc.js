import { ORDER_ASC } from "./index";

export function orderAsc(payload) {
  return function (dispatch) {
    dispatch({ type: ORDER_ASC, payload: payload });
  };
}
