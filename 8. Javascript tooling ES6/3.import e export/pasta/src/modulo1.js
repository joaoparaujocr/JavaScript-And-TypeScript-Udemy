// const nome = 'Luiz';
// const sobrenome = 'Miranda';
// const idade = 30;

// function soma(x, y) {
//     return x + y;
// }

// export { nome, sobrenome as sobrenome2, idade, soma };


const nome = 'Luiz';
const sobrenome = 'Miranda';
const idade = 30;

// export default function soma(x, y) {
//     return x + y;
// }

export { nome as default, sobrenome, idade };

// export class Pessoa {
//     constructor(nome, sobrenome) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//     }
// }