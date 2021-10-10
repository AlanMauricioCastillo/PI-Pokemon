import { GET_OWN } from "./index";
import axios from "axios";
import { CALL } from "../Variables"; 

export function getOwn() {
  console.log('holllllll')
  return async function (dispatch) {
    const call = await axios.get(CALL.OWN)
  //console.log(call.data,'holllllll')
  dispatch({ type: GET_OWN, payload: call.data });
  };
}