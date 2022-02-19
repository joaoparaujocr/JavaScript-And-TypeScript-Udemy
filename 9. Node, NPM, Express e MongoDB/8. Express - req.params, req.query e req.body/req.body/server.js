const express = require('express')
const app = express();
const porta = 3000;

app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send(`
    <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `)
})

app.post('/', (req, res) => {
    console.log(req.body.nome)
    res.send(`O valor enviado foi ${req.body.nome}`)
})

app.listen(porta, () => {console.log(`O servidor esta escutando mna posta: ${porta}
\nlocalhost:3000/`)})