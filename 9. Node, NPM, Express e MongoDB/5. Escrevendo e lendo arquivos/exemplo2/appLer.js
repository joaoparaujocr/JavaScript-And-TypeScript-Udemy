const path = require('path');
const ler = require('./modules/Ler');
const caminhoArquivo = path.resolve(__dirname, 'text.json')
const lerArquivo = async (caminho) => {
    const dados = await ler(caminho);
    renderizandoJSON(dados);
}

function renderizandoJSON(dados) {
    dados = JSON.parse(dados)
    dados.forEach(val => console.log(val))
}

lerArquivo(caminhoArquivo)