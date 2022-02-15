function criaPessoa(nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto() {
            return `${this.nome} ${this.sobrenome}`
        },
        set nomeNovo(nome) {
            this.nome = nome
        }
    }
}

const p1 = criaPessoa('João', 'Araújo')
p1.nomeNovo = 'Pedro'
console.log(p1.nomeCompleto)