const { texto } = require('./base');

const regExp1 = /João|Maria/ig;

console.log(texto.replace(/(João|Maria)/gi, function(input) {
    return input.toUpperCase();
}));