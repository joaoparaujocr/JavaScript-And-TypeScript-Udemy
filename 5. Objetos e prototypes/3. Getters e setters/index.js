function criaProduto(nome) {
    return {
        get nome() {
            return nome;
        },
        set nome(valor) {
            nome = valor
        }
    }
}

const p2 = criaProduto('Camiseta');
p2.nome = 'Camisa'
console.log(p2.nome)