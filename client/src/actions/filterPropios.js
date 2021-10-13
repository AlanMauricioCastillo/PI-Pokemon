import { SHOW_OWN } from "./index";

export function filterPropios() {
  return function (dispatch) {
    dispatch({ type: SHOW_OWN, payload: null });
  };
}
