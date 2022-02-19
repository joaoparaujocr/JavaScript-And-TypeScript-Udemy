const path = require('path');
const escrever = require('./modules/Escrever')
const caminhoArquivo = path.resolve(__dirname, 'text.json');
const pessoas = [
    {nome: 'João'},
    {nome: 'Eduardo'},
    {nome: 'Maria'},
    {nome: 'Luiza'}
]
const json = JSON.stringify(pessoas, '', 2);
escrever(caminhoArquivo, json)