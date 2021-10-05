
const BASE = "http://localhost:3001";
export const CALL = {
  MAIN: BASE + "/pokemons",
  BY_NAME: BASE + "/pokemons?name=", // + nombre
  BY_ID: BASE + "/pokemons/", // + id
  TYPES: BASE + "/Types",
  PAGES: BASE + "/pokemons/page/", // + num. si es 0 trae solo 40, si es entre 1 y 93 te trae los pokemon correspondientes a la pagina de 
};

