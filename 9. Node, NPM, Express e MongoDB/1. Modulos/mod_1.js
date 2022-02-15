const nome = 'João';
const sobrenome = 'Araújo';

const falaNome = () => {
    console.log(nome, sobrenome)
}

module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;