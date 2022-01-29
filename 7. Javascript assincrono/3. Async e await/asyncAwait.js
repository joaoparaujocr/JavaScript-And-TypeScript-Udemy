function rand(min = 0, max = 3) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function aguardandoResposta(msg, tempo) {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(typeof msg !== "string") {
                reject('O valor passado não é uma string');
                return;
            }

            resolve(msg.toUpperCase());
        }, tempo)
    });
}

async function executa() {
    try {
        const fase1 = await aguardandoResposta('Fase 1', rand())
        console.log(fase1)

        const fase2 = await aguardandoResposta('Fase 2', rand())
        console.log(fase2)

        const fase3 = await aguardandoResposta(2, rand())
        console.log(fase3)

        console.log('Terminamos na fase: ' + fase3);
    } catch(e) {
        console.log(e);
    }
}

executa()

// pending
// fulfilled
// reject