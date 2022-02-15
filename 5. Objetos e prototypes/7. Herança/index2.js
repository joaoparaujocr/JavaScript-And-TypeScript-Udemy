function Produto(nome, preco) {
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumentarPreco = function(valor) {
    this.preco += valor
}
Produto.prototype.diminuirPreco = function(valor) {
    this.preco -= valor
}

function Camiseta(nome, preco, cor) {
    Produto.call(this, nome, preco)
    this.cor = cor
}
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta

function Caneca(nome, preco, material, estoque) {
    Produto.call(this, nome, preco)
    this.material = material

    Object.defineProperty(this, 'estoque', {
        get: function(){
            return estoque
        },
        set: valor => {
            if (isNaN(valor)) throw new TypeError('Não é um número')
            estoque = valor
        },
        configurable: false,
        enumerable: true
    })
}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca

const produto = new Produto('Caneca', 5)
const camiseta = new Camiseta('Regata', 8, 'Branca')
const caneca = new Caneca('caneca', 10, 'plástico', 6)

caneca.estoque = 9

console.log(produto)
console.log(camiseta)
console.log(caneca)