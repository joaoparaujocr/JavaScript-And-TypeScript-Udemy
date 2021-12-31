// Factory functions / Constructor functions / Classes

function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
}

// A palavra new cria um objeto vazio e atrelar o this(que é uma palavra chave)
// ao objeto sendo criado e retorna o objeto
const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1)
const p2 = new Pessoa('João', 'Araújo');
console.log(p1);

/*
function criaPessoa(nome, sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const pessoa = criaPessoa('João', 'Araújo');
console.log(pessoa.nomeCompleto);
*/

/*
const pessoa = new Object();
pessoa.nome = 'Luiz';
pessoa.sobrenome = 'Otávio';
pessoa.idade = 30;
pessoa.falarNome = function() {
    console.log(`${this.nome} está falando seu nome.`);
}
pessoa.getDataNascimento = function() {
    const dataAtual = new Date;
    return dataAtual.getFullYear() - this.idade;
}
for(let i in pessoa){
    console.log(pessoa[i]);
}
*/