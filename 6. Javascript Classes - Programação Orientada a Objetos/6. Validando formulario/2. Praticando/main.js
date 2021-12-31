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
        const camposValidos = this.thisFieldIsValid();
        const senhasValidas = this.thisPasswordValid();
        
        if (camposValidos && senhasValidas) {
            alert('Formulário enviado');
            this.formulario.submit();
        }
    }

    thisPasswordValid() {
        let valid = true;
        const password = document.getElementById('senha');
        const passwordRepeat = document.getElementById('repetir-senha');

        if (password.value.length < 6 || password.value.length > 16) {
            valid = false;
            this.createError('Campo SENHA precisa ter de 6 a 16 caracteres.', password);
        }

        if (password.value !== passwordRepeat.value) {
            valid = false;
            this.createError('Os campos SENHA e REPETIR SENHA são diferentes.', password);
            this.createError('Os campos SENHA e REPETIR SENHA são diferentes.', passwordRepeat);
        }

        if(valid) {
            this.inputValid(password);
            this.inputValid(passwordRepeat);
        }

        return valid;
    }

    thisFieldIsValid() {
        let valid = true;

        for (let field of this.formulario.querySelectorAll('.invalid')) {
            field.remove();
        }

        for (let field of this.formulario.querySelectorAll('.input')) {
            const label = field.previousElementSibling.innerHTML;
            if (!field.value) {
                valid = false;
                this.createError(`Campo ${label.slice(0, -1).toUpperCase()} está vazio.`, field);
            }

            if (!this.validaInput(field, label)) valid = false;

            if(valid) this.inputValid(field);
        }

        return valid;
    }

    validaInput(field, label) {
        let valid = true;
        if (field.getAttribute('id') === 'nome' || field.getAttribute('id') === 'sobrenome') {
            if (!(field.value.match(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]+$/))) {
                valid = false;
                this.createError(`Campo ${label.slice(0, -1).toUpperCase()} precisa ter somente letras.`, field);
            }
        }

        if (field.getAttribute('id') === 'usuario') {
            if (!field.value.match(/^[A-Z-a-z0-9]+$/)){
                this.createError(`Campo ${label.slice(0, -1).toUpperCase()} precisa ter somente letras sem acentos e/ou números.`, field);
                valid = false;
            }

            if (field.value.length < 4 || field.value.length > 12) {
                this.createError(`Campo ${label.slice(0, -1).toUpperCase()} precisa ter de 4 a 12 caracteres.`, field)
                valid = false;
            }
        }

        if(field.getAttribute('id') === 'cpf') {
            const numberCPF = new ValidaCPF(field.value);
            if(!numberCPF.valida()){
                this.createError(`Campo ${label.slice(0, -1).toUpperCase()} Invalido.`, field);
                valid = false;
            }
        }

        return valid;
    }

    createError (msg, campo) {
        const div = document.createElement('div');
        div.classList.add('invalid');
        div.innerText = msg;
        campo.insertAdjacentElement('afterend', div);
    }

    inputValid(field) {
        field.style.borderWidth = '2px';
        field.style.borderColor = '#80ff00';
        field.style.borderStyle = 'solid'
    }
}

const valida = new ValidaFormulario();