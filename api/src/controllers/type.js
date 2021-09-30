const { Type } = require("../db");
const { URL } = require("../Variables");
const axios = require("axios");

const bulk = async () => {
  const call = await axios.get(URL.POKEMON_TYPE);
  const arr = call.data.results.map((e) => ({ 
    Nombre: e.name 
  }));
  const result = await Type.bulkCreate(arr);
  return result;
};

const getAll = async (req, res, next) => {
  try {
    const typesDb = await Type.findAll();
    if(!typesDb.length) {
      const firstCall = await bulk();
      res.json(firstCall);
    }
    else res.json(typesDb);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAll,
};
