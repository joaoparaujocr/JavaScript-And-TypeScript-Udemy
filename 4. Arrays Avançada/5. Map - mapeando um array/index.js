// Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7 , 11, 15, 22, 27];
const numerosDobrados = numeros.map(value =>  value * 2);
console.log(numerosDobrados);

const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Leticia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 }
]

// Retorne apenas uma string com o nome da pessoa
const nomeDasPessoas = pessoas.map(objeto => objeto.nome);
console.log(nomeDasPessoas);

// Remova apenas a chave "nome" do objeto
const idades = pessoas.map(objeto => ({idade: objeto.idade}));
console.log(idades)

// Adicione uma chave id em cada objeto
const ids = pessoas.map((objeto, ids) => {
    newObj = { ...objeto };
    newObj.id = ids;
    return newObj;
});

console.log(pessoas)
console.log(ids);