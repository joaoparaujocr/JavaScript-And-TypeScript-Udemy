require('dotenv').config();

const express = require('express');
const app = express();

const mongoose = require('mongoose')
mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('Pronto!')
    })
    .catch(e => console.log(e))

const porta = 3000;
const routers = require('./router');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middlewares')

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs');
app.use(meuMiddleware);
app.use(routers);

app.on('Pronto!', () => {
    app.listen(porta, () => console.log(`O servidor está escutando na porta: ${porta}\nhttp://localhost:${porta}`))
})