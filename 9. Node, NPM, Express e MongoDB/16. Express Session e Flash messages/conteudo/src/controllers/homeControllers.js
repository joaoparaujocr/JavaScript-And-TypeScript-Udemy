exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este será meu titulo da página',
        numeros: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    });
}

exports.tratarPost = (req, res) => {
    res.send('Formulário enviado');
}