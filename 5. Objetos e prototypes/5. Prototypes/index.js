// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

Pessoa.prototype.nomeCompleto = function (){
    return `${this.nome} ${this.sobrenome}`
}

// Instância
const pessoa1 = new Pessoa('Luiz', 'Otávio');
const pessoa2 = new Pessoa('João', 'Araújo');
const data = new Date();

console.dir(pessoa1);
console.dir(data);
console.log(pessoa1.nomeCompleto())