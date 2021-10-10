const { Router } = require("express");

// Ejemplo: const authRouter = require('./auth.js');
//const { Pokemon } = require("../db");
const { getThemAll, newPokemon, getFromId, getFromAlienOwner, getFromName, getPaged, getCreated } = require("../controllers/pokemon");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/", getThemAll);

router.get("/:id", getFromId);

router.get("/", getFromName);

router.post("/", newPokemon);

router.get("/page/:page", getPaged);

router.get("/alien/creations/:page", getFromAlienOwner);

router.get("/own/creations", getCreated);

module.exports = router;
