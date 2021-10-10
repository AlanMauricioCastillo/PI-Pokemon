import { FROM_API } from "./index";
import axios from "axios";
import { CALL } from "../Variables"; 

export function filterApi(page) {
  return async function (dispatch) {
    console.log('holasssss')
    const call = await axios.get(CALL.FORTY + page)
        dispatch({ type: FROM_API, payload: call.data });
  };
}