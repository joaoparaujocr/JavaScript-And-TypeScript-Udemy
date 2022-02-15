const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria' },
    { id: 1, nome: 'Helena' }
]

const novasPessoas = new Map();
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas.set(id, { ...pessoa })
}

// const novasPessoas = {};
// for (const { id, nome } of pessoas) {
//     novasPessoas[id] = { id, nome }
// }

console.log(novasPessoas.get(2))