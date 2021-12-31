// arguments = propriedade de uma função declarada
//normalmente ou com uma expressão não incluindo arrow function

/*
function funcao([nome1, nome2, sobrenome]) {
    //b = b || 0;
    console.log(nome1, nome2, sobrenome)
}
funcao(['João', 'Paulo', 'Ribeiro']);
*/

function conta(operador, acumulador, ...numeros) {
    for (let i of numeros) {
        if (operador === '+') acumulador += i;
        if (operador === '-') acumulador -= i;
        if (operador === '*') acumulador *= i;
        if (operador === '/') acumulador /= i;
    }

    console.log(acumulador)
}

conta('+', 0, 20, 30, 40, 50);