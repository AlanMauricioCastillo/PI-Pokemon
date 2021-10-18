import { FORCE_ASC } from "./index";

export function forceAsc(payload) {
  return function (dispatch) {
    dispatch({ type: FORCE_ASC, payload: payload });
  };
}
