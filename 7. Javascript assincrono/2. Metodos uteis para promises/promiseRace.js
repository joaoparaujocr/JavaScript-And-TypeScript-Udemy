function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function aguardandoResposta(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof msg !== "string") {
                reject('O valor passado não é uma string')
                return;
            };
            resolve(msg.toUpperCase());
        }, tempo);
    });
}

//Promise.all, Promise.race, Promise.resolve, Promise.reject
const promises = [
    aguardandoResposta('Promise 1', rand(1, 4)),
    aguardandoResposta('Promise 2', rand(1, 4)),
    aguardandoResposta('Promise 3', rand(1, 4)),
    aguardandoResposta('Promise 4', rand(1, 4)),
    aguardandoResposta(1, rand(1, 4)),
]

Promise.race(promises)
    .then(res => console.log(res))
    .catch(error => console.log(error))