import { ADD } from "./index";
import axios from "axios";
import { CALL } from "../Variables"; /* CALL = {
  MAIN: BASE + "/pokemons",
  BY_NAME: BASE + "/pokemons?name=", // + nombre
  BY_ID: BASE + "/pokemons/", // + id
  TYPES: BASE + "/Types",
  PAGES: BASE + "/pokemons/page/",
}; */

export function newPokemon(payload) {
  console.log(payload)
  return async function (dispatch) {
    await axios.post(CALL.NEW, payload)
    dispatch({ type: ADD, payload:payload });
  };
}