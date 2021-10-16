import { ADD } from "./index";
import axios from "axios";
import { CALL } from "../Variables";

export function newPokemon(payload) {
  return async function (dispatch) {
    try {
      //console.log(payload)
      const call = await axios.post(CALL.NEW, payload)
      if(call) {
        alert('¡Pokemon creado!') 
        dispatch({ type: ADD, payload: call.data });
      }
    } catch (e) {
      console.log(e);
      if(e) {
        alert('El pokemon ya existe')
      }
    }
  };
}
