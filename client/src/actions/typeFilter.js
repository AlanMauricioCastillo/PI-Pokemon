import { TYPE_FILTER } from "./index";


export function typeFilter(payload) {
  return function (dispatch) {
    console.log(payload)
    dispatch({ type: TYPE_FILTER, payload: payload });
  };
}