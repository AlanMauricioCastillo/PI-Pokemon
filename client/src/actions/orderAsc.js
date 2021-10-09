import { ORDER_ASC } from "./index";

export function orderAsc(payload) {
  return function (dispatch) {
    console.log(payload)
    dispatch({ type: ORDER_ASC, payload: payload });
  };
}
