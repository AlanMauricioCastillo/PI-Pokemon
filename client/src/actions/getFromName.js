import { GET_BY_NAME } from "./index.JS";
import axios from "axios";
import { CALL } from "../Variables"; /* CALL = {
  MAIN: BASE + "/pokemons",
  BY_NAME: BASE + "/pokemons?name=", // + nombre
  BY_ID: BASE + "/pokemons/", // + id
  TYPES: BASE + "/Types",
  PAGES: BASE + "/pokemons/page/",
}; */

export function getFromName(name) {
  return async function (dispatch) {
    const call = await axios(CALL.PAGES + name)
    console.log(call)
        dispatch({ type: GET_BY_NAME, payload: call.data });
  };
}