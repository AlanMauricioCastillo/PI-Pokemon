import { GET_OWN } from "./index";
import axios from "axios";
import { CALL } from "../Variables";

export function getOwn() {
  return async function (dispatch) {
    try {
      const call = await axios.get(CALL.OWN);
      dispatch({ type: GET_OWN, payload: call.data });
    } catch (e) {
      alert("¡el llamado de getOwn fallo!");
    }
  };
}
