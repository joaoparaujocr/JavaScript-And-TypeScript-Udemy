const nome = 'Luiz Otávio';
const sobrenome = 'Miranda';
const idade = 30;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura **  2);
let anoDeNascimento = 2021 - idade;
console.log(nome, sobrenome, 'tem', idade, 'anos, pesa', peso, 'kg\ntem', altura, 'altura e seus IMC é de', imc, `\nLuiz Otávio nasceu em ${anoDeNascimento}`)