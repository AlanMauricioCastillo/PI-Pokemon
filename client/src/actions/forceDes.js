import { FORCE_DES } from "./index";


export function forceDes(payload) {
  return function (dispatch) {
    console.log(payload)
    dispatch({ type: FORCE_DES, payload: payload });
  };
}