exports.paginaInicial = (req, res) => {
    // console.log(req.session.usuario)
    // req.session.usuario = { nome: 'João', logado: true }

    // req.flash('info', 'Olá mundo');
    // req.flash('error', 'Errorroror')
    // req.flash('success', 'Successinde!')
    // console.log(req.flash('info'), req.flash('error'), req.flash('success'))
    res.render('index', {
        titulo: 'Este será meu titulo',
        numeros: [0, 1, 2, 3, 4, 5, 6 ,7 ,8 ,9, 10]
    })
}

exports.tratarPost = (req, res) => {
    res.send('Formulário enviado');
}