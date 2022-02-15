function soma(valor1, valor2) {
    return valor1 + valor2
}

function calculo(valor1, valor2, valor3) {
    return soma(valor3, valor1) * valor2;
}

console.log(calculo(10,2,5))