class ValidaFormulario {
    constructor() {
        this.formulario = document.getElementById('form');
        this.eventos();
    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();

        if(camposValidos && senhasValidas) {
            alert('Enviado');
            this.formulario.submit();
        }
    }
    
    senhasSaoValidas() {
        let valid = true;
        const senha = this.formulario.querySelector('#senha');
        const repetirSenha = this.formulario.querySelector('#repetir-senha');

        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false;
            this.criaErro(senha, 'Senha precisa de 6 a 12 caracteres');
        }

        if(senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Senhas diferentes');
            this.criaErro(repetirSenha, 'Senhas diferentes');
        }

        return valid;
    }

    camposSaoValidos(){
        let valid = true;
        for (let erroText of this.formulario.querySelectorAll('.error-text')){
            erroText.remove();
        }

        for(let campo of this. formulario.querySelectorAll('.valida')){
            const label = campo.previousElementSibling.innerHTML;
            if(!campo.value) {
                this.criaErro(campo, `O campo ${label.slice(0, -1).toLowerCase()} não pode estar em branco`);
                valid = false;
            }

            if(campo.getAttribute('id') === 'cpf') {
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.getAttribute('id') === 'usuario') {
                if(!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true
        if(usuario.length < 3 || usuario.lenght > 12) {
            this.criaErro(campo,'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if(!usuario.match(/[a-zA-Z0-9]+/g)) {
            this.criaErro(campo,'Usuário precisa ter letras e/ou números.');
            valid = false;
        }

        return valid;
    }

    validaCPF(campo) {
        const cpf = new ValidaCPF(campo.value)

        if(!cpf.valida()) {
            this.criaErro(campo, 'CPF inválido');
            return false;
        }
        this.criarValido(campo);
        return true;
    }

    criaErro(campo, msg) {
        campo.style.borderWidth = '2px';
        campo.style.borderColor = 'red';
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    criarValido(campo) {
        campo.style.borderWidth = '2px';
        campo.style.borderColor = 'chartreuse';
    }
}

const valida = new ValidaFormulario();