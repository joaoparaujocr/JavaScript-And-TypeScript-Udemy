const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send(`
    <form>
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
    </form>
    `)
})

app.get('/teste', (req, res) => {
    console.log(req.query.nome);
    res.send(req.query)
})

app.listen(porta, () => {console.log(`Escutando na porta ${porta}\nlocalhost:3000`)});
