const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    },
}

const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    },
}

const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);
    }
}

// const pessoaPrototype = { ...falar, ...comer, ...beber };
const pessoaPrototype = Object.assign({}, falar, comer, beber)

function criarPessoa(nome, sobrenome) {
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criarPessoa('Luiz', 'Otávio');
const p2 = criarPessoa('Maria', 'A.');
p2.falar()
console.log(p1);
console.log(p2);