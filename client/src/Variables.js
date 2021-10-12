//http://localhost:3001/Pokemons
const BASE = "http://localhost:3001";
export const CALL = {
  OWN: BASE + "/Pokemons/own/creations",
  MAIN: BASE + "/Pokemons",
  BY_NAME: BASE + "/Pokemons?name=", // + nombre
  BY_ID: BASE + "/Pokemons/", // + id
  TYPES: BASE + "/Types",
  PAGES: BASE + "/Pokemons/page/", // + num. si es 0 trae solo 40, si es entre 1 y 93 te trae los pokemon correspondientes a la pagina de 
  //FORTY: BASE + "/Pokemons/alien/creations/", // asi paginado del back
  FORTY: BASE + "/Pokemons/alien/creations", // asi los 40
  NEW: BASE + "/Pokemons", // va esto mas una coma mas el estado ej: axios(new, estate)
};

