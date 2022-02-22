const express = require('express')
const router = express.Router();
const homeControllers = require('./src/controllers/homeControllers')
const contatoControllers = require('./src/controllers/contatoControllers')

// Router home
router.get('/', homeControllers.paginaInicial)
router.post('/', homeControllers.paginaPost);

// Router contatos
router.get('/contato', contatoControllers.paginaInicial)


module.exports = router;
