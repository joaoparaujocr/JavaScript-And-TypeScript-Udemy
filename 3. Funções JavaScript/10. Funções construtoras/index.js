// Função construtora -> constrói objetos
// Função fábrica -> fabrica objetos

// Função construtura -> iniciamos com letra Maiusculas
// Pessoa (new)
function Pessoa(nome, sobrenome) {
    // Atributos ou métodos privados e internos
    const id = 123456;
    const metodoInterno = () => {
        console.log(id);
    }

    // Atributos ou métodos públicos e externos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = () => {
        console.log(this.nome + ': Sou um método');
    };
}

const p1 = new Pessoa('João', 'Araújo');
console.table(p1);
p1.metodo();