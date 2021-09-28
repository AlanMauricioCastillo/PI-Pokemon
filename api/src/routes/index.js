const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const pokemonRoutes = require('./pokemons');
const typeRoutes = require('./types');
// Importar los models de DB
const { Pokemon, Type } = require('../db');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/Pokemons', pokemonRoutes);
router.use('/Types', typeRoutes);


module.exports = router;
