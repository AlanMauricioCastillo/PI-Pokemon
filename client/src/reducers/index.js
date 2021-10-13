import {
  GET_THEM_ALL,
  GET_BY_NAME,
  GET_BY_ID,
  GET_TYPES,
  GET_OWN,
  ORDER_ASC,
  ORDER_DES,
  FORCE_ASC,
  FORCE_DES,
  TYPE_FILTER,
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
  error: [],
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
    case GET_OWN:
      return {
        ...state,
        pokemonsPropios: action.payload,
      };
    case ORDER_ASC:
      return {
        ...state,
        pokemons: action.payload,
      };
    case ORDER_DES:
      return {
        ...state,
        pokemons: action.payload,
      };
    case FORCE_ASC:
      return {
        ...state,
        pokemons: action.payload,
      };
    case FORCE_DES:
      return {
        ...state,
        pokemons: action.payload,
      };
    //los 40 paginados del back
    /* case FROM_API:
      return {
        ...state,
        pokemons: action.payload,
      }; */
    //los 40
    case FROM_API:
      return {
        ...state,
        pokemonsFilter: action.payload,
      };
    case TYPE_FILTER:
      return {
        ...state,
        pokemons: action.payload,
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
      const i = state.pokemonsPropios.find(
        (e) => e.name === action.payload.data.name
      );
      if (!i) {
        console.log('akasssssssssssssssssssssss')
        alert("¡Well done Pokemon created!");
        return {
          ...state,
          pokemonsPropios: [...state.pokemonsPropios, action.payload],
        };
      } else {
        alert("the Pokemon all ready");
        return {
          ...state,
          pokemonsPropios: [...state.pokemonsPropios],
        };
      }
    default:
      return state;
  }
}
