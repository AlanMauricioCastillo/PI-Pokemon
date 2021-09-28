const { Type } = require("../db");

const getAll = (req, res, next) => {
  return Type.findAll()
    .then((e) => res.json(e))
    .catch((err) => next(err));
};

module.exports = {
  getAll,
};
