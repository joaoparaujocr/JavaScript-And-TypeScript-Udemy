const produtos = {nome: 'Caneca', preco: 1.8}
const outraCoisa = { ...produtos}

outraCoisa.nome = 'Lápis'
outraCoisa.preco = 2.5
console.log(produtos)
console.log(outraCoisa)