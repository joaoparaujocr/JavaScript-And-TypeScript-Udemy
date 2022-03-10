// g - globa = Encontre todas as ocorrências
// i - insensitive = encontre as ocorrências indiferente de a letra ser maiúscula ou minuscula
const { texto } = require('./base')

const regExp1 = /João/; // Ira procurar a primeira expressão extramente da forma escrita

console.log(regExp1.test(texto));