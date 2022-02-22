const express = require('express')
const app = express()
const porta = 3000;
const routes = require('./routes')

app.use(routes)
app.use(express.urlencoded({ extended: true }))

app.listen(porta, () => console.log(`O servidor está escutando na porta ${porta}\nlocalhost:3000`))