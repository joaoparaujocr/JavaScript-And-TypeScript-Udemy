class PessoaClass {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    falar() {
        return `${this.nome} ${this.sobrenome} está falando`
    }

    comer() {
        return `${this.nome} ${this.sobrenome} está comendo`
    }

    beber() {
        return `${this.nome} ${this.sobrenome} está bebendo`
    }
}

function PessoaFunction(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome
}

PessoaFunction.prototype.falar = function(){
    return `${this.nome} ${this.sobrenome} está bebendo`
}

const p1 = new PessoaClass('João', 'Araújo');
const p2 = new PessoaFunction('Bárbara', 'Penha');
console.log(p1);
console.log(p2)