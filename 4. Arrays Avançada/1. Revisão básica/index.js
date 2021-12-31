// //Maneiras de declarar uma Array
// const nomes = [ 'Luiz', 'Otávio', 'Miranda' ];
// console.log(nomes);

// const nome = 'Luiz Otávio Miranda';
// const nomes = nome.split(' ');
// console.log(nomes);

const nomes = ['Eduardo', 'Maria', 'Joana', 'Wallace', 'Rosana'];
const novo = nomes.slice(0, 4);
console.log(novo)
// const novo = [...nomes]; copia uma array sem interferência

//novo.pop(); //remove do final
//novo.shift(); // remove do inicio
//nomes.push('João'); // adiciona no final
//nomes.unshift('Wallace'); // adiciona no começo