const express = require('express')
const route = express.Router();
const homeController = require('./controllers/homeController')
const homePostController = require('./controllers/homePostController')

route.get('/', homeController.paginaInicial);
route.post('/', homePostController.postHome)

module.exports = route;