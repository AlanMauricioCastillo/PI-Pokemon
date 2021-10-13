import { GET_BY_ID } from "./index";
import axios from "axios";
import { CALL } from "../Variables";

export function getFromId(id) {
  return async function (dispatch) {
    try {
      const call = await axios.get(CALL.BY_ID + id);
      console.log(call);
      dispatch({ type: GET_BY_ID, payload: call.data });
    } catch (e) {
      alert("¡ese pokemon no existe!");
    }
  };
}
