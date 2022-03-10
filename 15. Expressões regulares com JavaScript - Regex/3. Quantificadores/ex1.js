const { texto } = require('./base');

// * (opcionais) 0 ou n vezes
// + (obrigatório) 1 ou n vezes
// ? (opcionais) 0 ou 1 vez

console.log(texto);

const regExp1 = /Jo+ão+/gi;

console.log(texto.match(regExp1));