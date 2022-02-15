function Produto(nome, preco, estoque) {
    this.nome = nome,
    this.preco = preco,
    
    Object.defineProperty(this, 'estoque', {
        configurable: false,
        enumerable: true,
        writable: true,
        value: function() {
            return estoque
        }
    })
}

const p1 = new Produto('Camisa', 20, 5)
console.log(p1.estoque())