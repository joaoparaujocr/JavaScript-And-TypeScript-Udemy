const express = require('express');
const router = express.Router();
const homeControllers = require('./src/controllers/homeControllers')
const contatoControllers = require('./src/controllers/contatoControllers')

// Router Home
router.get('/' ,homeControllers.paginaInicial);
router.post('/', homeControllers.tratarPost);

// Router Contato
router.get('/contato', contatoControllers.paginaInicial);

module.exports = router;