const { Pokemon, Type, PokemonType } = require("../db");
const axios = require("axios");
const { URL } = require("../Variables");

let array = [];

const apiCall = async () => {
  try {
    const first = await axios.get(URL.POKEMON);
    let count = await Pokemon.count();
    //console.log(count)
    if (count > 3) {
      return first.data.results.slice(0, 5);
    } else {
      let size = 9 - count;
      //console.log(size);
      return first.data.results.slice(0, size);
    }
  } catch (err) {
    next(err);
  }
};

const getThemAll = async (req, res, next) => {
  try {
    let arrOfPromeses = [];
    const pDb = await Pokemon.findAndCountAll({
      model: Pokemon,
      limit: 4,
    });
    console.log(pDb);
    pDb.rows.forEach(async (e) => {
      let arr = [];
      const values = await PokemonType.findAll({ where: { PokemonId: e.id } });
      values.forEach((e) => {
        arr.push(e.TypeNombre);
      });
      array.push({
        id: e.id,
        name: e.Nombre,
        types: arr.map((tipo) => tipo),
        imagen: e.Imagen,
        fuerza: e.Fuerza,
      });
    });
    const pokemonApi = await apiCall();
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
  } catch (err) {
    next(err);
  }
};

const newPokemon = async (req, res, next) => {
  const {
    Nombre,
    Vida,
    Fuerza,
    Defensa,
    Velocidad,
    Imagen,
    Altura,
    Peso,
    Tipo,
  } = req.body;
  try {
    if (!(await Pokemon.findOne({ where: { Nombre: Nombre } }))) {
      const [result, status] = await Pokemon.findOrCreate({
        where: {
          Nombre,
          Vida,
          Fuerza,
          Defensa,
          Velocidad,
          Imagen,
          Altura,
          Peso,
        },
      });
      let arr = [];
      Tipo.forEach(async (e) => {
        const value = await Type.findOne({ where: { Nombre: e } });
        !!value && !!result && result.addType(value);
        arr.push(value.dataValues.Nombre);
      });
      const valueAlt = await Pokemon.findByPk(result.dataValues.id);
      const data = {
        id: valueAlt.id,
        name: valueAlt.Nombre,
        types: arr.map((tipo) => tipo),
        imagen: valueAlt.Imagen,
        fuerza: valueAlt.Fuerza,
      };
      if (status) res.json(data);
      else res.sendStatus(500);
    } else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
};

const getFromId = async (req, res, next) => {
  const { id } = req.params;
  try {
    if (id.length > 7) {
      const result = await Pokemon.findByPk(id, {
        include: Type,
      });
      const obj = {
        nombre: result.Nombre,
        id: result.Id,
        imagen: result.Imagen,
        fuerza: result.Fuerza,
        defensa: result.Defensa,
        altura: result.Altura,
        peso: result.Peso,
        velocidad: result.Velocidad,
        tipo: result.types.map((tipo) => tipo.Nombre),
        vida: result.Vida,
      };
      res.json(obj);
    } else {
      const result2 = await axios.get(URL.POKEMON_ID + id);

      const obj = {
        nombre: result2.data.name,
        id: result2.data.id,
        altura: result2.data.height,
        peso: result2.data.weight,
        vida: result2.data.stats[0].base_stat,
        fuerza: result2.data.stats[1].base_stat,
        defensa: result2.data.stats[2].base_stat,
        velocidad: result2.data.stats[5].base_stat,
        imagen: result2.data.sprites.front_default,
        tipo: result2.data.types.map((tipo) => tipo.type.name),
      };
      res.json(obj);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getThemAll,
  newPokemon,
  getFromId,
};
