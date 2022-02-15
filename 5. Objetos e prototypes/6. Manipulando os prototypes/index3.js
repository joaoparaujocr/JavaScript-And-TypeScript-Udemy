function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))
}

Produto.prototype.aumenta = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto('camisa', 100)
const p2 = {
    nome: 'caneca',
    preco: 100
}

Object.setPrototypeOf(p2, Produto.prototype)
p2.desconto(20)
console.log(p2)

const p3 = Object.create(Produto.prototype)
p3.preco = 120
p3.nome = 'Caneca'
console.log(p3);

const p4 = Object.create(Produto.prototype, {
    preco: {
        value: 113
    },
    nome: {
        value: 'Lápis'
    }
})

console.log(p4)