const { lookahead } = require('./base');

console.log(lookahead);

// console.log(lookahead.match(/.*[^in]active$/gim));

// Positive lookahead (retorne as frases que tem active)
console.log(lookahead.match(/.+(?=[^in]active)/gim));

// Positive lookahead (retorne as frases que tem inactive)
console.log(lookahead.match(/.+(?=\s+inactive)/gim));

// Negative lookahead (não retorne as frase que tem active)
console.log(lookahead.match(/^(?!.+[^in]active).+$/gim));

// Negative lookahead (não retorne as frase que tem inactive)
console.log(lookahead.match(/^(?!.+inactive).+$/gim));