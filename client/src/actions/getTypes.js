import { GET_TYPES } from "./index";
import axios from "axios";
import { CALL } from "../Variables"; 

export function getTypes() {
  return async function (dispatch) {
    const call = await axios(CALL.TYPES)
    console.log(call)
        dispatch({ type: GET_TYPES, payload: call.data });
  };
}