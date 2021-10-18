import { ADD } from "./index";
import axios from "axios";
import { CALL } from "../Variables";

export function newPokemon(payload) {
  return async function (dispatch) {
    try {
      const call = await axios.post(CALL.NEW, payload);
      if (call) {
        dispatch({ type: ADD, payload: call.data });
      }
    } catch (e) {
      if (e) {
        alert("El pokemon ya existe");
      }
    }
  };
}
