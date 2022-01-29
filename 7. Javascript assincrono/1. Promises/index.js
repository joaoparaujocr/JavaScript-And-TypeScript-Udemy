function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + max )
}

function aguardando(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg)
        if(cb) cb();
    }, tempo);
}

aguardando('Frase 1', rand(1, 3), function() {
    aguardando('Frase 2', rand(1, 3), function() {
        aguardando('Frase 3', rand(1, 3));
    });
});