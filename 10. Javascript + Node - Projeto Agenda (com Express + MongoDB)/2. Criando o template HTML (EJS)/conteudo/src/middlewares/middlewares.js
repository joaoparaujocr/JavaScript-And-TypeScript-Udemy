exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local'
    next()
};

exports.checkCsurfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN') {
        return res.send('ERRO 404')
    }
}

exports.checkRouter = (req, res, next) => {
    res.status(404).render('404', {
        title: 'ERRO'
    })
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken()
    next()
}