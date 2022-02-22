const express = require('express')
const app = express()
const porta = 3000;
const routers = require('./router')

app.use(routers);

app.listen(porta, ()=> console.log(`O servidor está escutando na porta ${porta}\nhttp://localhost:${porta}`))