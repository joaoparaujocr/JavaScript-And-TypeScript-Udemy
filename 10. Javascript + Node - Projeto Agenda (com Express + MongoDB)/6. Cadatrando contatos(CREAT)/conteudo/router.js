const express = require('express');
const router = express.Router();

// Importando controladores
const homeControllers = require('./src/controllers/homeControllers')
const loginControllers = require('./src/controllers/loginControllers')
const contatoControllers = require('./src/controllers/contatoControllers')

// Routers Home
router.get('/', homeControllers.index);

// Routers Login
router.get('/login/index', loginControllers.index);
router.post('/login/register', loginControllers.register);
router.post('/login/login', loginControllers.login);
router.get('/login/logout', loginControllers.logout);

// Routers Contato
router.get('/contato/index', contatoControllers.index)
router.post('/contato/register', contatoControllers.register)
router.get('/contato/index/:id', contatoControllers.editContato)

module.exports = router;