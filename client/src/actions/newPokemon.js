import { ADD } from "./index";
import axios from "axios";
import { CALL } from "../Variables";

export function newPokemon(payload) {
  console.log(payload,'fuera');
  return async function (dispatch) {
    console.log(payload);
    const call = await axios.post(CALL.NEW, payload);
    console.log(call);
    !call && alert("¡The Pokemon all ready exist!");
    dispatch({ type: ADD, payload: call.data });
  };
}
