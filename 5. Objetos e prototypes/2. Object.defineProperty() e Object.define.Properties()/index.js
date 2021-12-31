// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
        value: estoque, // mostra o valor da chave
        writable: false, // alterar o valor oou se o valo é gravável
        configurable: true // se pode apagar ou reconfigurar a chave
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.keys(p1));