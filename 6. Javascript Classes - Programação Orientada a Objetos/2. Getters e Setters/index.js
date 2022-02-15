const _velocidade = Symbol('velocidade'); //criar uma chave provada dentro do objeto

class Carro {
    constructor(nome) {
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade() {
        return this[_velocidade]
    }

    set velocidade(value) {
        if (typeof value !== "number") return;
        if (value > 100 || value < 0) return;
        return this[_velocidade] = value
    }

    acelerar() {
        if (this[_velocidade] >= 100) return
        this[_velocidade]++;
    }

    frear() {
        if (this[_velocidade] <= 0) return
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

for(let i = 0; i<= 200; i++) {
    c1.acelerar()
}

c1.velocidade = 0
console.log(c1.velocidade)