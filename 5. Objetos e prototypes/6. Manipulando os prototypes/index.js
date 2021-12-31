function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}


Produto.prototype.desconto = function(p) {
    this.preco = this.preco - (this.preco * (p / 100));
};

const produto1 = new Produto('café', '100');
const produto2 = {
    nome: 'Caneca',
    preco: 50
}

Object.setPrototypeOf(produto2, Produto.prototype);
produto2.desconto(50);

const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        enumerable: true,
        value: 42,
        configurable: true
    },
    tamanho: {
        writable: true,
        enumerable: true,
        value: 42,
        configurable: true
    }
});
p3.desconto(50);
console.log(p3);

/*
// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
    // __proto__: Object.prototype
};

const objB = {
    chaveB: 'B'
    // __proto__: Object.prototype
};

const objC = new Object();
objC.chaveC = 'C';

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);
*/