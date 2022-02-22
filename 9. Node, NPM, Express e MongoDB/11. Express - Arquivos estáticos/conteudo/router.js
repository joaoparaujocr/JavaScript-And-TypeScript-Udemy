const express = require('express');
const router = express.Router();
const homeControllers = require('./src/controllers/homeControllers')
const contatoControllers = require('./src/controllers/contatoControllers')

// Router home
router.get('/', homeControllers.paginaInicial)
router.get('/', homeControllers.paginaPost);

// Router contato
router.get('/', contatoControllers.paginaInicial)

module.exports = router