function rand(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') return reject('Bad value');
            return resolve(msg.toUpperCase() + ' - Passou na primeira promise.')
        })
    }, tempo)
}

async function executa() {
    try {
        const fase1 = await esperaAi('Fase 1', rand(0, 3));
        console.log(fase1);

        const fase2 = await esperaAi('Fase 2', rand(0, 3));
        console.log(fase2);

        const fase3 = await esperaAi('Fase 3', rand(0, 3));
        console.log(fase3);

    } catch(e) { console.log(e) }
}

executa();

// pending -> pendente
// fulfilled -> resolvida
// reject => rejeitada 

// esperaAi('Frase 1', rand(0, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('Frase 2', rand(0, 3))
//     })
//     .then(resposta => {
//         console.log(resposta)
//         return esperaAi('Frase 3', rand(0, 3))
//     })
//     .then(resposta => console.log(resposta))
//     .catch(e => console.log(e));