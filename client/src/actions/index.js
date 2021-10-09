
export const GET_THEM_ALL = "GET_THEM_ALL",
  GET_BY_NAME = "GET_BY_NAME",
  GET_BY_ID = "GET_BY_ID",
  GET_TYPES = "GET_TYPES",
  PAGES = "PAGES",
  ORDER_ASC = "ORDER_ASC",
  ORDER_DES = "ORDER_DES",
  CLEAR = "CLEAR",
  ADD = "ADD",
  FORCE_ASC = "FORCE_ASC",
  FORCE_DES = "FORCE_DES",
  TYPE_FILTER = "TYPE_FILTER",
  PROPIOS = "PROPIOS",
  FROM_API = "FROM_API";
/* 
export function getThemAll(title) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?s=${title}&apikey=`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIES", payload: json.Search });
      });
  };
}
export function getFromId(id) {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=&i=${id}`)
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "GET_MOVIE_DETAIL", payload: json });
      });
  };
}
export function getFromName(movie) {
  return {
    type: "ADD_MOVIE_FAVORITE",
    payload: movie,
  };
}
export function newPokemon(id) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload: id,
  };
}

export function getPaged(id) {
  return {
    type: "REMOVE_MOVIE_FAVORITE",
    payload: id,
  };
}
 */