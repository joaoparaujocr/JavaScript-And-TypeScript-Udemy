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

    if(!emCache) {
        return Promise.reject('baixando página');
    } else {
        return 'Pagina em cache'
    }
}

baixaPagina(false)
    .then(res => console.log(res))
    .catch(res => console.log(res))