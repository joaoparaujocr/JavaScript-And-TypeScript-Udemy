const { texto } = require('./base');

const regExp1 = /João|Maria/ig;

console.log(texto.match(regExp1));
console.log(texto.replace(/João/ig, 'Felipe'));