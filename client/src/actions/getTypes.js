import { GET_TYPES } from "./index";
import axios from "axios";
import { CALL } from "../Variables";

export function getTypes() {
  return async function (dispatch) {
    try {
      const call = await axios.get(CALL.TYPES);
      dispatch({ type: GET_TYPES, payload: call.data });
    } catch (e) {
      console.log("¡el llamado de getTypes fallo!");
    }
  };
}
