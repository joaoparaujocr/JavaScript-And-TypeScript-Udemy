exports.paginaInicial = (req, res) => {
    res.render('index')
}

exports.paginaPost = (req, res) => {
    res.send('Formulário enviado')
}