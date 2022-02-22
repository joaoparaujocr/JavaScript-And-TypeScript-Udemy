exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.paginaPost = (req, res) => {
    res.send(`O formulário foi enviado`);
}