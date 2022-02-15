class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log(`${this.nome} o já está ligado.`);
            return
        }
        console.log(`${this.nome} está ligando...`);
        setTimeout(() => {
            console.log(`${this.nome} ligado`)
        }, 3000)
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log(`${this.nome} já está desligado.`);
            return;
        }
        console.log(`${this.nome} está desligando...`)
        setTimeout(() => {
            console.log(`${this.nome} desligado`)
        }, 3000)
        this.ligado = false
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('iphone', 'Preto', 'X');
console.log(s1)