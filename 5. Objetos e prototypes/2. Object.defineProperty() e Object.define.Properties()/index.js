// defineProperty - defineProperties

function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave ou não
        value: estoque, // valor da chave
        writable: false, // pode alterar ou não o valor
        configurable: true // pode editar ou deletar as configurações da propriedade
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(Object.values(p1));
console.log(Object.keys(p1));