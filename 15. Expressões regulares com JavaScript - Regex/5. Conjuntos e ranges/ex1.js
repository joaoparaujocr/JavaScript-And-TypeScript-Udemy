const { alfabeto } = require('./base');

// [] -> conjuntos
// [abc] -> tudo que está aqui dentro da sequencia mas de forma individual, ou seja, caractere por caractere
// [abc]+ -> tudo que está aqui dentro da sequencia mais de uma forma coletiva caso estejam próximas
// [^abc] -> tudo menos o que está dentro do conjunto

// [0-9] -> range de números, os ranges sempre vão do caractere inicial para o final
// \w -> pega todas os caracteres alfanuméricos e o underline [A-Za-z0-9_]
// \W -> ele não encontra os caracteres anteriores
// \d -> ele encontra os números [0-9]
// \D -> ele não encontra os números
// \s -> encontra caracteres de espaço em branco

console.log(alfabeto);
console.log(alfabeto.match(/[0-9]+/g));
console.log(alfabeto.match(/[a-z]+/g));
console.log(alfabeto.match(/[A-Z]+/g));
console.log(alfabeto.match(/[^a-zA-Z0-9]+/g)); // Negação
console.log(alfabeto.match(/[\u00A0-\u00BA]+/g)); // Unicode
console.log(alfabeto.match(/[\u00C0-\u00F0A-Za-z]+/g)); // Unicode dos alfabetos
