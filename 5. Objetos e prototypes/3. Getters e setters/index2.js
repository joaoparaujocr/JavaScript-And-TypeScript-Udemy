function Produto(nome, valor, estoque) {
    this.nome = nome,
    this.valor = valor

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        get: () => estoque,
        set: valor => {
            if (isNaN(valor)) throw new TypeError('Esse valor não é um número')
            estoque = valor
        }
    })
}

const produto1 = new Produto('camisa', 20, 3)
console.log(produto1)