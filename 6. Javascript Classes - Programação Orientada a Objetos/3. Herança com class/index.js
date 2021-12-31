class DispositivoEletronico {
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }

    ligar() {
        if (this.ligado) {
            console.log('Já está ligado');
            return;
        }
        console.log('Ligando');
        this.ligado = true;
    }

    desligar() {
        if (!this.ligado){
            console.log('Já está desligado');
            return;
        }
        console.log('Desligando');
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

const s1 = new Smartphone('Iphone', 'Preto', 'X');

class Tablet extends DispositivoEletronico {
    constructor(nome, cor) {
        super(nome);
        this.cor = cor;
    }
}

const t1 = new Tablet('iPad', 'cinza');
console.log(t1)