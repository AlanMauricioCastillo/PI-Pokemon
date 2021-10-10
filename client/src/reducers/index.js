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
  //SHOW_OWN,
  FROM_API,
  CLEAR,
  PAGES,
  //ADD,
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
      case GET_OWN:
      return {
        ...state,
        pokemons: action.payload,
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
    /* case SHOW_OWN:
      return {
        ...state,
        pokemons: [...state.pokemonsPropios],
      }; */
    case FROM_API:
      return {
        ...state,
        pokemons: action.payload,
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
    /* case ADD:
      return {
        ...state,
        pokemonsPropios: [...state.pokemonsPropios.filter((pokemon) => pokemon.id !== action.payload)],
        
      }; */
      default:
        return state;
      }
    }
    console.log(initialState.pokemonsPropios)

