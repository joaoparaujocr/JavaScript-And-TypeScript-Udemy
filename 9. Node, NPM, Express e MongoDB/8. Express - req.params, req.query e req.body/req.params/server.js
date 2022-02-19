const express = require('express')
const app = express();
const porta = 3000

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `)
})

app.post('/', (req, res) => {
    res.send('Formulario enviado')
})

app.get('/contato', (req, res) => {
    res.send(`
        Obrigado por entrar em contato
    `)
})

app.get('/testes/:idUsuario?/:nomeDoUsuario?', (req, res) => {
    console.log(req.params)
    res.send(`ID: ${req.params.idUsuario} | Nome: ${req.params.nomeDoUsuario}`)
})

app.listen(porta, () => { console.log(`Escutando na porta ${porta}\nlocalhost:3000`) })