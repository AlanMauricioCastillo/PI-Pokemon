import { ADD } from "./index";
import axios from "axios";
import { CALL } from "../Variables";

export function newPokemon(payload) {
  return async function (dispatch) {
    const call = await axios.post(CALL.NEW, payload)
    console.log(call)
    dispatch({ type: ADD, payload:call.data });
  };
}