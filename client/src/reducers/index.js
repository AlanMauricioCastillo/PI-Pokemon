import {
  GET_THEM_ALL,
  GET_BY_NAME,
  GET_BY_ID,
  GET_TYPES,
  ORDER_ASC,
  ORDER_DES,
  PAGES,
  ADD,
} from "../actions/index";

const initialState = {
  pokemons: [],
  pokemonsDetails: {},
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_THEM_ALL:
      return {
        ...state,
        pokemons: action.payload,
      };
    case GET_BY_ID:
      const id = state.pokemons.find((e) => e.id === action.payload.id);
      if (!id) {
        return {
          ...state,
          pokemons: [...state.pokemons, action.payload],
        };
      } else
        return {
          ...state,
          pokemons: [...state.pokemons],
        };
    case GET_BY_NAME:
      const n = state.pokemons.find((e) => e.name === action.payload.name);
      if (!n) {
        return {
          ...state,
          pokemons: [...state.pokemons, action.payload],
        };
      } else
        return {
          ...state,
          pokemons: [...state.pokemons],
        };
    case GET_TYPES:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
      case ORDER_ASC:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
      case ORDER_DES:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
    case PAGES:
      return {
        ...state,
        pokemons: state.pokemons.filter((movie) => movie.id !== action.payload),
      };
    case ADD:
      return {
        ...state,
        pokemonsDetails: action.payload,
      };
    default:
      return state;
  }
}
