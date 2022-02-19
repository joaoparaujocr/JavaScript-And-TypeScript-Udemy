const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="Post">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    res.send('Formulario enviado')
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente');
})

app.listen(3000, () => console.log('Servidor escutando na porta 3000\nhttp://localhost:3000'));