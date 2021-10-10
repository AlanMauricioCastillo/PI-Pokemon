import { SHOW_OWN } from "./index";

export function filterPropios() {
  return function (dispatch) {
    console.log('hola')
    dispatch({ type: SHOW_OWN, payload: null});
  };
}