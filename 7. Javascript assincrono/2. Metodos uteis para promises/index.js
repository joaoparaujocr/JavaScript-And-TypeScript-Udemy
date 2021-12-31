function rand(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string'){
                reject('Bad Value');
                return;
            }

            resolve(msg.toUpperCase() + ' - Passei na promise.');
        }, tempo);
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject
/*
function baixaPagina() {
    const emCache = false;

    if (emCache) {
        return Promise.resolve('Página em cache');
    } else {
        return esperaAi('Baixei a página', 3000)
    }
}
*/

// function baixaPagina() {
//     const emCache = true;

//     if (emCache) {
//         return Promise.reject('Página em cache');
//     } else {
//         return esperaAi('Baixei a página', 3000)
//     }
// }

// baixaPagina()
//     .then(dadosPagina => console.log(dadosPagina))
//     .catch(e => console.log(e));


const promises = [
    // 'Primeiro valor',
    esperaAi('Primeira promise', rand(1, 5)),
    esperaAi('Segunda promise', rand(1, 5)),
    esperaAi('Terceira promise', rand(1, 5)),
    // esperaAi(1000, rand(1, 5)),
    // 'Outro valor'
];
/*
Promise.race(promises)
    .then(function (valor) {
        console.log(valor)
    })
    .catch(e => {
        console.log(e);
    })
*/
Promise.all(promises)
    .then(function (valor) {
        console.log(valor)
    })
    .catch(e => {
        console.log(e);
    })