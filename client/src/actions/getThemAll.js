import { GET_THEM_ALL } from "./index";
import axios from "axios";
import { CALL } from "../Variables"; 

export function getThemAll() {
  return async function (dispatch) {
    const call = await axios.get(CALL.MAIN)
    //console.log(call.data)
        dispatch({ type: GET_THEM_ALL, payload: call.data });
  };
}
