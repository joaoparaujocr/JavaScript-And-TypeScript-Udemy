// return
// Retornar um valor
// A função se encerra

function criarMultiplicador(multiplicador) {
    // multiplicador
    return function (n) {
        return n * multiplicador
    };
}

const duplica = criarMultiplicador(2);
const triplica = criarMultiplicador(3);
const quadriplica = criarMultiplicador(4);

console.log(duplica(2), triplica(2), quadriplica(2));

/*
function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }

    return falaResto;
}

const fala = falaFrase('Olá');
const resto = fala('Mundo!');
console.log(resto);
*/

/*
function criarPessoa(nome, sobrenome) {
    return {nome, sobrenome};
}

const p1 = criarPessoa('João', 'Paulo');
const p2 = {
    nome: 'Otavio',
    sobrenome: 'Oliveira'
}

console.log(typeof p1, typeof p2);
*/