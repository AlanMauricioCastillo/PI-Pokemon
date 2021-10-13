import { TYPE_FILTER } from "./index";

export function typeFilter(payload) {
  return function (dispatch) {
    dispatch({ type: TYPE_FILTER, payload: payload });
  };
}
