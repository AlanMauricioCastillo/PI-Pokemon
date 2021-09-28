const { Router } = require("express");

// Ejemplo: const authRouter = require('./auth.js');
//const { Pokemon } = require("../db");
const { getFromApi, newPokemon } = require("../controllers/pokemon")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", getFromApi);

router.post("/", newPokemon);

module.exports = router;
