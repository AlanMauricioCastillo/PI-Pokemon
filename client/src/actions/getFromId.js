import { GET_BY_ID } from "./index";
import axios from "axios";
import { CALL } from "../Variables"; /* CALL = {
  MAIN: BASE + "/pokemons",
  BY_NAME: BASE + "/pokemons?name=", // + nombre
  BY_ID: BASE + "/pokemons/", // + id
  TYPES: BASE + "/Types",
  PAGES: BASE + "/pokemons/page/",
}; */


export function getFromId(id) {
  return async function (dispatch) {
    const call = await axios.get(CALL.BY_ID + id)
    console.log(call)
        dispatch({ type: GET_BY_ID, payload: call.data });
  };
}