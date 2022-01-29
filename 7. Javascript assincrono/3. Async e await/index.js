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

aguardandoResposta('fase 1', rand())
    .then(res => {
        console.log(res);
        return aguardandoResposta('fase 2', rand());
    })
    .then(res => {
        console.log(res)
        return aguardandoResposta('fase 3', rand());
    })
    .then(res => console.log(res))
    .catch(e => console.log(e))