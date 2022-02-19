const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
            Nome <input type="text">
            <button>Enviar</button>
        </form>
    `)
})

app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato')
})

app.post('/', (req, res) => {
    res.send('Seu formulário foi enviado')
})

app.listen(3000, () => {console.log('Escutando na porta 3000\nhttp://localhost:3000/')})