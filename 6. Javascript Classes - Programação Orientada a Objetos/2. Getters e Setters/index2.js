class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome
    }

    get nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }

    set nomeCompleto(value) {
        value = value.split(' ');
        this.nome = value.shift();
        this.sobrenome = value.join(' ')
    }
}

const p1 = new Pessoa('João', 'Araújo')
p1.nomeCompleto = 'Barbara Penha'
console.log(p1.nomeCompleto)