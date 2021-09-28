const { Router } = require("express");

// Ejemplo: const authRouter = require('./auth.js');
//const { Pokemon } = require("../db");
const { getAll, newPokemon } = require("../controllers/pokemon")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", getAll);

router.post("/", newPokemon);

module.exports = router;
