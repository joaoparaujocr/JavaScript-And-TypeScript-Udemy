// Retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
// function callbackFilter(valorDosIndices, numeroDoIndice, arrayCompleto) {
//     return valorDosIndices > 10;
// }
const numerosFiltrados = numeros.filter(valorDosIndices => valorDosIndices > 10);
console.log(numerosFiltrados);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
];
// Retorne as pessoas que tem o nome com 5 letras ou mais
const filterPessoasNomeGrande = pessoas.filter( objeto => objeto.nome.length >= 5 );
let nomePessoasGrande = [];
for(let i of filterPessoasNomeGrande) {
    if (i.nome.length >= 5) nomePessoasGrande.push(i.nome);
}
console.log(nomePessoasGrande);

// Retorne as pessoas com mais de 50 anos
const filterPessoasAnos = pessoas.filter( objeto => objeto.idade > 50);
console.log(filterPessoasAnos);

// Retorne as pessoas cujo nome termina com a
const filterNomeANoFinal = pessoas.filter( objeto => objeto.nome.toLowerCase().endsWith('a'));
console.log(filterNomeANoFinal);