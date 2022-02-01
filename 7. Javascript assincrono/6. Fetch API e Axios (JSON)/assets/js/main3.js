axios('assets/json/pessoas.json')
    .then(resposta => carregaElementoNaPagina(resposta.data))

function carregaElementoNaPagina(json) {
    const resultado = document.querySelector('.resultado');
    const table = document.createElement('table');

    for (let pessoa of json) table.appendChild(createTr(pessoa));

    resultado.appendChild(table);
}

function createTd(value) {
    const td = document.createElement('td');
    td.innerHTML = value;
    return td;
}

function createTr(obj) {
    const tr = document.createElement('tr');
    tr.appendChild(createTd(obj.nome));
    tr.appendChild(createTd(obj.idade));
    tr.appendChild(createTd(obj.estado));
    tr.appendChild(createTd(obj.salario));
    return tr
}