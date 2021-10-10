import { FORCE_ASC } from "./index";

export function forceAsc(payload) {
  return function (dispatch) {
    console.log(payload)
    dispatch({ type: FORCE_ASC, payload: payload });
  };
}
