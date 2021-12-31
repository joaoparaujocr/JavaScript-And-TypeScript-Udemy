const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Julia'];
// nomes.splice(indice, delete indice, elemento1, elemento2, elemento3);
// pop
const removidos = nomes.splice(3, 2, 'Luiz');
console.log(nomes, removidos);