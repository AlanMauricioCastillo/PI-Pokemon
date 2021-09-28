const { Router } = require('express');

// Ejemplo: const authRouter = require('./auth.js');
//const { Type } = require('../db')

const { getAll } = require("../controllers/type")


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', getAll)

router.post('/', (req, res) => {
  res.send('soy el post de types')
})


module.exports = router;