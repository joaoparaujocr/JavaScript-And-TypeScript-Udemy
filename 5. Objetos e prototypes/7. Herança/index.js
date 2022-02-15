// Produto -> aumento de preço e desconto
// Camiseta = cor, caneta = material

function Produto(nome, preco, cor) {
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumentarPreco = function(valor) {
    this.preco += valor;
}
Produto.prototype.desconto = function(valor) {
    this.preco -= valor
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco, cor)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta

const produto = new Produto('Caneca', 8, 'Marrom')
const camiseta = new Camiseta('Regata', 7.5, 'Preta');

console.log(produto)
console.log(camiseta)