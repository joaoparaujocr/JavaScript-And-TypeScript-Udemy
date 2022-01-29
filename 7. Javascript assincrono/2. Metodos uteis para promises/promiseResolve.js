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
function baixaPagina(cache) {
    const emCache = cache;

    if(emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return aguardandoResposta('Baixei a página', rand(1, 3));
    }
}

baixaPagina(false)
    .then(res => console.log(res))
    .catch(res => console.log(res))