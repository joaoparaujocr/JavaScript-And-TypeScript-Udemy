function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + max )
}

function aguardandoResposta(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== "string") reject('O valor não é uma string')
        setTimeout(() => {
            resolve(msg)
        }, tempo);
    })
}

aguardandoResposta('Conexão com o BD', rand(1, 3))
    .then(res => {
        console.log(res);
        return aguardandoResposta('Buscando dados da Base', rand(1, 3))
    })
    .then(res => {
        console.log(res);
        return aguardandoResposta(222222, rand(1, 3))
    })
    .then(res => {
        console.log('Exibir os dados na tela')
    })
    .catch(error => console.log(error))