// g - globa = Encontre todas as ocorrências
// i - insensitive = encontre as ocorrências indiferente de a letra ser maiúscula ou minuscula
const { texto } = require('./base')

const regExp1 = /João/i; //ira procurar tanto a palavra João ou joão ou seja as letras maiúsculas ou minusculas não fazem diferença

console.log(regExp1.test(texto));