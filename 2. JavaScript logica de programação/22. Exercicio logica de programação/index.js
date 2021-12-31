const verificandoNumero = (num) => {
    if (typeof num !== 'number') return 'Invalido';
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz'
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    return num;
}
let contador = 0;

while (contador <= 100) {
    console.log(contador, verificandoNumero(contador));
    contador++;
}