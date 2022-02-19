const express = require('express');
const app = express();
const porta = 3000;

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
    </form>
    `)
})

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
    console.log(req.params.idUsuarios, req.params.parametro)
    console.log(req.query)
    res.send(req.params.idUsuarios)
})

app.get('/contato', (req, res) => {
    res.send(`Obrigado por entrar em contato`)
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi ${req.body.nome}`)
})


app.listen(porta, () => console.log(`O servidor está escutando na porta ${porta}`))