function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad value');
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Conexão com o BD.', rand(1, 4))
    .then(resposta => {
    console.log(resposta);
    return esperaAi('Buscando dados da Base.', rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
        return esperaAi(23454, rand(1, 3));
    })
    .then(resposta => {
        console.log(resposta);
    }).catch(e => {
        console.log('ERROR:', e);
    })