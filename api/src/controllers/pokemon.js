const { Pokemon } = require("../db");

const getAll = (req, res, next) => {
  return Pokemon.findAll()
    .then((e) => res.json(e))
    .catch((err) => next(err));
};

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

module.exports = {
  getAll,
  newPokemon,
};
