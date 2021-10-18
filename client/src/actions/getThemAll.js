import { GET_THEM_ALL } from "./index";
import axios from "axios";
import { CALL } from "../Variables";

export function getThemAll() {
  return async function (dispatch) {
    try {
      const call = await axios.get(CALL.MAIN);
      dispatch({ type: GET_THEM_ALL, payload: call.data });
    } catch (e) {
      console.log("¡el llamado de getThemAll fallo!");
    }
  };
}
