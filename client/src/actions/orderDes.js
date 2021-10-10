import { ORDER_DES } from "./index";


export function orderDes(payload) {
  return function (dispatch) {
    console.log(payload)
    dispatch({ type: ORDER_DES, payload: payload });
  };
}