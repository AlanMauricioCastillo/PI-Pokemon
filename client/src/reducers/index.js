import {
  GET_THEM_ALL,
  GET_BY_NAME,
  GET_BY_ID,
  GET_TYPES,
  ORDER_ASC,
  ORDER_DES,
  FORCE_ASC,
  FORCE_DES,
  TYPE_FILTER,
  PROPIOS,
  FROM_API,
  CLEAR,
  PAGES,
  ADD,
} from "../actions/index";

const initialState = {
  pokemons: [],
  pokemonsDetails: {},
  pokemonsTypes: [],
  pokemonsFilter: [],
  pokemonsPropios: [],
  pokemonsApi: [],
  pokemonsOnscreen: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THEM_ALL:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        pokemonsDetails: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        pokemonsDetails: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        pokemonsTypes: action.payload,
      };
    case ORDER_ASC:
      return {
        ...state,
        pokemons: action.payload,
      };
    case ORDER_DES:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
    case FORCE_ASC:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
    case FORCE_DES:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
    case PROPIOS:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
    case FROM_API:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
    case TYPE_FILTER:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
    case CLEAR:
      return {
        ...state,
        pokemonsDetails: action.payload,
      };
    case PAGES:
      return {
        ...state,
        pokemons: action.payload,
      };
    case ADD:
      return {
        ...state,
        pokemonsPropios: [...state.pokemonsPropios, action.payload],
      };
    default:
      return state;
  }
}
