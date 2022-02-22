const express = require('express');
const router = express.Router();
const homeControllers = require('./controllers/homeControllers')
const contatoControllers = require('./controllers/contatoControllers')

router.get('/', homeControllers.paginaInicial);
router.post('/', homeControllers.postHome)
router.get('/contato', contatoControllers.paginaInicial)


module.exports = router;