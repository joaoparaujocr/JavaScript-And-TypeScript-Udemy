const pessoa = {
    nome: 'Luiz',
    sobrenome: 'miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 321
    }
};

// Atribuição Via desestruturação
const {nome, idade, endereco:{rua, numero}} = pessoa;
console.log(joa, numero);