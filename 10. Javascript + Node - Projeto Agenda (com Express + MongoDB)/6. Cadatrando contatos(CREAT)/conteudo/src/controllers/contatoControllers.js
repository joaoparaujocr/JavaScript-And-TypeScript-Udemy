const Contato = require('../models/ContatoModel')

exports.index = (req, res) => {
    if (req.session.user) {
        return res.render('contato', {
            contato: {},
            title: 'Cadastro de Contato'
        });
    }

    req.flash("errors", "Você precisa estar logado para acessar a página de contatos");
    req.session.save(() => {
        return res.redirect('/login/index');
    });
}

exports.register = async (req, res) => {

    try {
        const contato = new Contato(req.body);
        await contato.register();
    
        if (contato.errors.length > 0) {
            req.flash('errors', contato.errors);
            req.session.save(() => res.redirect('/contato/index'));
        }
    
        req.flash('success', 'Contato salvo com sucesso.');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        
    } catch (error) {
        console.log(error)
        res.render('404')
    }
    
}

exports.editContato = async (req, res) => {
    if(!req.params.id) return res.render('404');

    try {
        const contato = await Contato.buscarPorId(req.params.id)
        if (!contato) return res.render('404')
    
        res.render('contato', { 
            contato: contato,
            title: 'Editar contato'
        })
        
    } catch (error) {
        console.log(error)
        res.render('404')
    }
}