const { Router } = require("express");

// Ejemplo: const authRouter = require('./auth.js');
//const { Pokemon } = require("../db");
const { getFromApi, newPokemon, getFromId } = require("../controllers/pokemon")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", getFromApi);

router.get("/:id", getFromId);

router.post("/", newPokemon);

module.exports = router;
