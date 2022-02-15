class ControleRemoto {
    constructor(tv) {
        this.tv = tv;
        this.volume = 0;
    }

    //Método de instancia
    aumentarVolume() {
        if (this.volume >= 100) {
            console.log ('O volume ja está no máximo')
            return
        }
        this.volume ++;
    }

    diminuirVolume() {
        if (this.volume <= 0) {
            console.log('O volume ja está no mínimo')
            return
        }
        this.volume --;
    }

    // Método estático
    static trocaPilha() {
        console.log('trocando pilha');
    }
}

const tv1 = new ControleRemoto('Sony');
tv1.volume = 0
tv1.diminuirVolume()
tv1.aumentarVolume()
tv1.aumentarVolume()
ControleRemoto.trocaPilha()
console.log(tv1.volume)