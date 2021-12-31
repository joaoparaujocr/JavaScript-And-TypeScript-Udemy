const numero = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numero.reduce(function(acumulador, valorAtual, indice, array) {
    acumulador += valorAtual
    return acumulador;
})
console.log(total);

// const pessoas = [
//     { nome: 'Luiz', idade: 62 },
//     { nome: 'Maria', idade: 23 },
//     { nome: 'Eduardo', idade: 55 },
//     { nome: 'Leticia', idade: 10 },
//     { nome: 'Rosana', idade: 64 },
//     { nome: 'Wallace', idade: 63 }
// ];
// const maisVelha = pessoas.reduce(function(acumulador, valor) {
//     if (acumulador.idade > valor.idade) return acumulador;
//     return valor;
// })
// console.log(maisVelha)