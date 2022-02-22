const express = require('express');
const app = express();
const porta = 3000;
const routers = require('./router');
const path = require('path');

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
app.use(routers);

app.listen(porta, () => console.log(`O servidor está escutando na porta ${porta}\nhttp://localhost:${porta}`));