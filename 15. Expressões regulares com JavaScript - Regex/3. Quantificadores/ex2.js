const { texto, arquivos } = require('./base');

// * (opcionais) 0 ou n vezes
// + (obrigatório) 1 ou n vezes
// ? (opcionais) 0 ou 1 vez
// \ caractere de escape
// {min,max} mínimo e máximo

const regExp1 = /\.(jp|JP)(e|E){0,1}(g|G)/gi

for (const arquivo of arquivos) {
    const valido = arquivo.match(regExp1);

    if(!valido) continue;

    console.log(arquivo ,valido);
}