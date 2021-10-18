import { FORCE_DES } from "./index";

export function forceDes(payload) {
  return function (dispatch) {
    dispatch({ type: FORCE_DES, payload: payload });
  };
}
