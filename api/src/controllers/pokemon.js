const { Pokemon } = require("../db");
const axios = require("axios");
const { URL } = require("../Variables");
let array = [];

async function makeServiceCall() {
  const first = await axios.get(URL.POKEMON);
  return first.data.results.slice(0, 9);
}

async function getFromApi(req, res, next) {
  try {
    let arrOfPromeses = [];
    const pokemonApi = await makeServiceCall();
    pokemonApi.forEach((element) => {
      arrOfPromeses.push(axios.get(element.url));
    });
    await Promise.all(arrOfPromeses).then((e) => {
      e.forEach((result) => {
        let pokemon = result.data;
        array.push({
          id: pokemon.id,
          name: pokemon.name,
          types: pokemon.types.map((e) => e.type.name),
          imagen: pokemon.sprites.other["official-artwork"].front_default,
          fuerza: pokemon.stats[1].base_stat,
        });
      });
    });
    res.json({ pokemons: array });
    array = [];
  } catch(err) {
    next(err);
  }
}

const newPokemon = (req, res, next) => {
  const { Nombre, Vida, Fuerza, Defensa, Velocidad, Altura, Peso } = req.body;
  return Pokemon.create({
    Nombre,
    Vida,
    Fuerza,
    Defensa,
    Velocidad,
    Altura,
    Peso,
  })
    .then((e) => res.json(newPokemon))
    .catch((err) => next(err));
};

/* este es para los de la api y los mios
axios
      .get(URL.POKEMON)
      //const pDb = Pokemon.findAll();
      //return Promise.all([pApi, pDb])
      .then((e) => {
        const pokemonApi = e[0].data.results.slice(0, 9),
          pokemonDb = e[1],
          all = [...pokemonApi, pokemonDb];
        res.json(all); 
        */

  async function getFromId(req, res, next) {
    const { id } = req.params;
  }

module.exports = {
  getFromApi,
  newPokemon,
  getFromId,
};
