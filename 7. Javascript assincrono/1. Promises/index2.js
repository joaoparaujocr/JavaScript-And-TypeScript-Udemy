function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + max )
}

function aguardandoResposta(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    })
}

aguardandoResposta('Frase 1', rand(1, 3))
    .then(res => {
        console.log(res);
        return aguardandoResposta('Frase 2', rand(1, 3))
    })
    .then(res => {
        console.log(res);
        return aguardandoResposta('Frase 3', rand(1, 3))
    })
    .then(res => console.log(res))
    .catch()