const Login = require('../models/LoginModel')

exports.index = (req, res) => {
    res.render('login', {
        title: 'Login'
    })
}

exports.register = async (req, res) => {
    try {
        const login = new Login(req.body);
        await login.register();
    
        if(login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(() => {
               return res.redirect('/login/index')
            })
    
            return
        }

        req.flash('success', 'Seu usuário foi criado com sucesso');
            req.session.save(() => {
               return res.redirect('/login/index')
            })
    
            return
    
        return res.send(login.errors)
        
    } catch (error) {
        console.log(e)
        return res.render('404')
    }

}