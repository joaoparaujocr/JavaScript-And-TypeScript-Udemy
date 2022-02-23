const express = require('express');
const router = express.Router();
const homeControllers = require('./src/controllers/homeControllers')
const loginControllers = require('./src/controllers/loginControllers')

// Routers Home
router.get('/', homeControllers.index);

// Router Login
router.get('/login/index', loginControllers.index)

module.exports = router;