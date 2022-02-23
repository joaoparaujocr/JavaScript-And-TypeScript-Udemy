exports.paginaInicial = (req, res) => {
    // console.log(req.session.usuario)
    // req.session.usuario = { nome: 'João', logado: true }

    // req.flash('info', 'Olá mundo');
    // req.flash('error', 'Errorroror')
    // req.flash('success', 'Successinde!')
    // console.log(req.flash('info'), req.flash('error'), req.flash('success'))
    res.render('index', {
        title: 'Agenda'
    })
}

exports.tratarPost = (req, res) => {
    res.send('Formulário enviado');
}