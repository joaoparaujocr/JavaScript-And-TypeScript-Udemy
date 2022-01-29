function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function aguardandoResposta(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject('O valor passado não é uma string');

        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, tempo);
    });
}

//Promise.all, Promise.race, Promise.resolve, Promise.reject
const promises = [
    'Primeiro valor',
    aguardandoResposta('Promise 1', rand(1, 4)),
    aguardandoResposta('Promise 2', rand(1, 4)),
    aguardandoResposta(3, rand(1, 4)),
    'Outro valor'
]

Promise.all(promises)
    .then(res => console.log(res))
    .catch(error => console.log(error))