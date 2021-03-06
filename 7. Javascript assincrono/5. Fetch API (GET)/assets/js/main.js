document.addEventListener('click', e => {
    e.preventDefault();
    const elemento = e.target;
    const tagName = elemento.tagName.toLowerCase();
    if(tagName === 'a') {
        carregaPagina(elemento);
    }
})

function carregaPagina(el) {
    const href = el.getAttribute('href');
    fetch(href)
        .then(response => {
            if (response.status !== 200) throw new Error(`${response.status} ${response.statusText}`);
            return response.text()
        })
        .then(response => carregaHTML(response))
        .catch(e => console.error(e))
}

function carregaHTML(html) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = html;
}