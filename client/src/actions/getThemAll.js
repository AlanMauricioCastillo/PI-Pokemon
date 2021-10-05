import { GET_THEM_ALL } from "./index.JS";
import axios from "axios";
import { CALL } from "../Variables"; 

export function getThemAll() {
  return async function (dispatch) {
    const call = await axios(CALL.MAIN)
    console.log(call)
        dispatch({ type: GET_THEM_ALL, payload: call.data });
  };
}
