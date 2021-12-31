function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePriv;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        // value: estoque,
        // writable: true,
        configurable: true,
        get: function() {
            return estoquePriv;
        },
        set: function(valor) {
            if (typeof valor !== 'number'){
                throw new TypeError('Valor invalido')
            }

            estoquePriv = valor;
        }
    });
}

function criarProduto(nome) {
    return {
        get nome(){
            return nome;
        },
        set nome(valor) {
            nome = valor;
        }
    }
}

// const p1 = new Produto('Camiseta', 20, 3);
// p1.estoque = 'dede';
// console.log(p1.estoque)

const p2 = criarProduto('Camisa');
p2.nome = 'Tênis'; //Setter
console.log(p2.nome) //Getter
