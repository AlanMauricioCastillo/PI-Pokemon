import { ALIEN_FILTER } from "./index";

export function filtrarPokemonNoPropios(pokemons) {
  return function (dispatch) {
    dispatch({ type: ALIEN_FILTER, payload: pokemons });
  };
}
