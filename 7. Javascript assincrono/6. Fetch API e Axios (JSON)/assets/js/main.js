// fetch('assets/json/pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementosNaPagina(json));

axios('assets/json/pessoas.json')
    .then(resposta => carregaElementosNaPagina(resposta.data));

function carregaElementosNaPagina(json) {
    const table = document.createElement('table');
    const divResultado = document.querySelector('.resultado')
    for (let pessoas of json) {
        const tableRow = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = pessoas.nome;
        tableRow.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = pessoas.idade;
        tableRow.appendChild(td);

        td = document.createElement('td');
        td.innerHTML = `R$ ${pessoas.salario}`;
        tableRow.appendChild(td);
        console.log(pessoas.nome);

        table.appendChild(tableRow)
    }

    divResultado.appendChild(table)
}