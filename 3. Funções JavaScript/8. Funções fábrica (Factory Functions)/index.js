function criarPessoa(nome, sobrenome, altura, peso) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeCompleto(valor) {
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto) {
            return `${this.nome} está ${assunto}.`;
        },
        altura,
        peso,
        // Getter
        get imc() {
            return (this.peso / (this.altura ** 2)).toFixed(2);
        } 
    };
}

const p1 = criarPessoa('João', 'Araújo', 1.80, 70);
p1.nomeCompleto = 'Bárbara Paulo Ribeiro Araújo'
console.log(p1.nomeCompleto);