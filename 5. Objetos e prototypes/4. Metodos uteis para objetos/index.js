const produto = { nome: 'Caneca', preco: 1.8 };
console.log(Object.entries(produto))

for(let [chave, valor] of Object.entries(produto)) {
    console.log(chave, valor)
}

//console.log(Object.values(produto))



// Object.defineProperty(produto, 'nome', {
//     writable: false,
//     configurable: false,
// })

// console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

// Object.freeze(produto)

// const caneca = { nome: produto.nome, preco: produto.preco }

// const caneca = Object.assign({}, produto, { material: 'porcelana'})

/*
const caneca = {
    ...produto,
    material: 'Porcelana'
};
*/