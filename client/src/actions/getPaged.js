import { PAGES } from "./index";
import axios from "axios";
import { CALL } from "../Variables"; /* CALL = {
  MAIN: BASE + "/pokemons",
  BY_NAME: BASE + "/pokemons?name=", // + nombre
  BY_ID: BASE + "/pokemons/", // + id
  TYPES: BASE + "/Types",
  PAGES: BASE + "/pokemons/page/",
}; */

export function getPaged(page) {
  return async function (dispatch) {
    const call = await axios(CALL.PAGES + page)
    console.log(call)
        dispatch({ type: PAGES, payload: call.data });
  };
}