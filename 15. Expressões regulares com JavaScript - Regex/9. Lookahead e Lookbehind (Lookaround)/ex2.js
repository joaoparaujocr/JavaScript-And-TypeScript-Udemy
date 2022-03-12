const { lookahead } = require('./base');

console.log(lookahead);

// Positive lookbehind (Procurar frase que iniciam com a palavra online vão ser encontradas)
console.log(lookahead.match(/(?<=ONLINE\s+)\S+.*/gim));

// Negative lookbehind
console.log(lookahead.match(/^.+(?<!ONLINE.+)$/gim));

