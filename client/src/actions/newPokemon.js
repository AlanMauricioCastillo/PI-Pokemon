import { ADD } from "./index";
import axios from "axios";
import { CALL } from "../Variables";

export function newPokemon(payload) {
  return async function (dispatch) {
    console.log(payload)
    await axios.post(CALL.NEW, payload)
    dispatch({ type: ADD, payload:payload });
  };
}