const { Pokemon, Type, PokemonType } = require("../db");
const axios = require("axios");
const { URL } = require("../Variables");

const apiCall = async () => {
  try {
    const first = await axios.get(URL.POKEMON);
    let count = await Pokemon.count();
    if (count > 3) {
      return first.data.results.slice(0, 5);
    } else {
      let size = 9 - count;
      return first.data.results.slice(0, size);
    }
  } catch (err) {
    next(err);
  }
};

const getThemAll = async (req, res, next) => {
  let array = [];
  const { name } = req.query;
  if (name) return next();
  try {
    let arrOfPromeses = [];
    const pDb = await Pokemon.findAndCountAll({
      model: Pokemon,
      limit: 4,
    });
    pDb.rows.forEach(async (e) => {
      let arr = [];
      const values = await PokemonType.findAll({
        where: { PokemonId: e.id },
      });
      values.forEach((e) => {
        arr.push(e.TypeNombre);
      });
      array.push({
        id: e.id,
        name: e.Nombre,
        Types: arr.map((tipo) => tipo),
        imagen: e.Imagen,
        fuerza: e.Fuerza,
      });
    });
    const pokemonApi = await apiCall();
    pokemonApi.forEach((element) => {
      arrOfPromeses.push(axios.get(element.url));
    });
    let e = await Promise.all(arrOfPromeses);
    e.forEach((result) => {
      let pokemon = result.data;
      array.push({
        id: pokemon.id,
        name: pokemon.name,
        Types: pokemon.types.map((e) => e.type.name),
        imagen: pokemon.sprites.other["official-artwork"].front_default,
        fuerza: pokemon.stats[1].base_stat,
      });
    });
    res.status(200).json({ pokemons: array });
    array = [];
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
        id: result.id,
        imagen: result.Imagen,
        fuerza: result.Fuerza,
        defensa: result.Defensa,
        altura: result.Altura,
        peso: result.Peso,
        velocidad: result.Velocidad,
        tipo: result.Types.map((tipo) => tipo.Nombre),
        vida: result.Vida,
      };
      res.status(200).json(obj);
    } else {
      const result2 = await axios.get(URL.POKEMON_ID + id);

      const obj = {
        nombre: result2.data.name,
        id: result2.data.id,
        imagen: result2.data.sprites.other["official-artwork"].front_default,
        fuerza: result2.data.stats[1].base_stat,
        defensa: result2.data.stats[2].base_stat,
        altura: result2.data.height,
        peso: result2.data.weight,
        velocidad: result2.data.stats[5].base_stat,
        tipo: result2.data.types.map((tipo) => tipo.type.name),
        vida: result2.data.stats[0].base_stat,
      };
      res.status(200).json(obj);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("El pokemon ingresado no existe");
  }
};

const getFromName = async (req, res, next) => {
  const { name } = req.query;
  if (!name) res.status(404).send("Reacer el formulario");
  try {
    const result = await Pokemon.findOne({
      where: { Nombre: name.toLowerCase() },
      include: Type,
    });
    if (result) {
      const obj = {
        nombre: result.Nombre,
        id: result.id,
        imagen: result.Imagen,
        fuerza: result.Fuerza,
        defensa: result.Defensa,
        altura: result.Altura,
        peso: result.Peso,
        velocidad: result.Velocidad,
        tipo: result.Types.map((tipo) => tipo.Nombre),
        vida: result.Vida,
      };
      res.status(200).json(obj);
    } else {
      const result2 = await axios.get(URL.POKEMON_NAME + name.toLowerCase());
      const obj = {
        nombre: result2.data.name,
        id: result2.data.id,
        imagen: result2.data.sprites.other["official-artwork"].front_default,
        fuerza: result2.data.stats[1].base_stat,
        defensa: result2.data.stats[2].base_stat,
        altura: result2.data.height,
        peso: result2.data.weight,
        velocidad: result2.data.stats[5].base_stat,
        tipo: result2.data.types.map((tipo) => tipo.type.name),
        vida: result2.data.stats[0].base_stat,
      };
      res.status(200).json(obj);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("El pokemon ingresado no existe");
  }
};

const newPokemon = async (req, res, next) => {
  if (!req.body) res.send("Reacer el formulario");
  const {
    Nombre,
    Vida,
    Fuerza,
    Defensa,
    Velocidad,
    Imagen,
    Altura,
    Peso,
    types,
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
      types.forEach(async (e) => {
        const value = await Type.findOne({ where: { Nombre: e } });
        !!value && !!result && result.addType(value);
        arr.push(value.dataValues.Nombre);
      });
      const valueAlt = await Pokemon.findByPk(result.dataValues.id);
      if (!!arr.length && valueAlt) {
        const data = {
          id: valueAlt.id,
          name: valueAlt.Nombre,
          Types: arr.map((tipo) => tipo),
          imagen: valueAlt.Imagen,
          fuerza: valueAlt.Fuerza,
        };
        if (status && !!arr.length) {
          res.status(200).json(data);
        } else res.sendStatus(500);
      }
    } else res.sendStatus(500);
  } catch (err) {
    next(err);
  }
};

const getPaged = async (req, res, next) => {
  const { page } = req.params;
  let pages = [];
  let pokemonsOnPages = [];
  try {
    let count = await Pokemon.count();
    if (page < "1" || page > "93") {
      return res.status(404).send("Ingrese un numero valido entre 1 y 93");
    } else {
      if (page <= "75") {
        for (let i = page * 12 - 12; i < page * 12; i++) {
          let sum = i + 1 - count - 3;
          pokemonsOnPages.push(axios.get(URL.POKEMON_ID + sum));
        }
      } else {
        for (let i = page * 12 - 12; i < page * 12; i++) {
          let sum = i + 9101;
          pokemonsOnPages.push(axios.get(URL.POKEMON_ID + sum));
        }
      }
      let e = await Promise.all(pokemonsOnPages);
      e.forEach((result) => {
        let pokemon = result.data;
        pages.push({
          id: pokemon.id,
          name: pokemon.name,
          Types: pokemon.types.map((e) => e.type.name),
          imagen: pokemon.sprites.other["official-artwork"].front_default,
          fuerza: pokemon.stats[1].base_stat,
        });
      });
      return res.status(200).json({ pokemons: pages });
    }
  } catch (err) {
    next(err);
  }
};

const getCreated = async (req, res, next) => {
  try {
    let array = [];
    const pDb = await Pokemon.findAll({
      model: Pokemon,
      include: Type,
    });
    if (pDb) {
      pDb.forEach((e) => {
        array.push({
          id: e.id,
          name: e.Nombre,
          Types: e.Types.map((tipo) => tipo.Nombre),
          imagen: e.Imagen,
          fuerza: e.Fuerza,
        });
      });
      res.status(200).json(array);
    }
  } catch (err) {
    next(err);
  }
};

// 40 pokemons paginados
/* const getFromAlienOwner = async (req, res, next) => {
  const { page } = req.params;
  console.log(page);
  let pages = [];
  let pokemonsOnPages = [];
  try {
    if (page < "1" || page > "4") {
      return res.status(404).send("Ingrese un numero valido entre 1 y 4");
    }
    if (page === "4") {
      for (let i = 37; i < 41; i++) {
        pokemonsOnPages.push(axios.get(URL.POKEMON_ID + i));
      }
    } else {
      for (let i = page * 12 - 12; i < page * 12; i++) {
        let sum = i + 1;
        pokemonsOnPages.push(axios.get(URL.POKEMON_ID + sum));
      }
    }
    let e = await Promise.all(pokemonsOnPages);
    e.forEach((result) => {
      let pokemon = result.data;
      pages.push({
        id: pokemon.id,
        name: pokemon.name,
        types: pokemon.types.map((e) => e.type.name),
        imagen: pokemon.sprites.other["official-artwork"].front_default,
        fuerza: pokemon.stats[1].base_stat,
      });
    });
    return res.json({ pokemons: pages });
  } catch (err) {
    next(err);
  }
}; */

// 40 pokemons todos juntos
const getFromAlienOwner = async (req, res, next) => {
  try {
    let pokemonsOnPages = [];
    let pages = [];
    let first = await axios.get(URL.POKEMON);
    if (first) {
      //console.log(first.data.results)
      first.data.results.forEach((e) => {
        pokemonsOnPages.push(axios.get(`${e.url}`));
      });
      let secund = await axios.get(first.data.next);
      if (secund) {
        secund.data.results.forEach((e) => {
          pokemonsOnPages.push(axios.get(`${e.url}`));
        });
      }
    }

    let e = await Promise.all(pokemonsOnPages);
    e &&
      e.forEach((result) => {
        let pokemon = result.data;
        pages.push({
          id: pokemon.id,
          name: pokemon.name,
          Types: pokemon.types.map((e) => e.type.name),
          imagen: pokemon.sprites.other["official-artwork"].front_default,
          fuerza: pokemon.stats[1].base_stat,
        });
      });
    res.status(200).json({ pokemons: pages });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getThemAll,
  newPokemon,
  getFromId,
  getFromName,
  getPaged,
  getCreated,
  getFromAlienOwner,
};
