/*
Primitivos (Imutáveis) - string, number, boolean,
undefined,null,bigint, symbol - valores copiados

Referência (mutável) - array, object, function - Passados como referência
*/

let a = [1, 2, 3];
let b = [...a];
console.log(a, b);

a.pop();

console.log(a, b);