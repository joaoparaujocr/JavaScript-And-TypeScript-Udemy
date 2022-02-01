axios('assets/json/pessoas.json')
    .then(resposta => carregaElementoNaPagina(resposta.data))

function carregaElementoNaPagina(json) {
    const resultado = document.querySelector('.resultado');
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        tr.appendChild(createTd(pessoa.nome));
        tr.appendChild(createTd(pessoa.idade));
        tr.appendChild(createTd(pessoa.estado));
        tr.appendChild(createTd(pessoa.salario));

        table.appendChild(tr)
    }

    resultado.appendChild(table)

}

function createTd(value) {
    const td = document.createElement('td');
    td.innerHTML = value;
    return td;
}