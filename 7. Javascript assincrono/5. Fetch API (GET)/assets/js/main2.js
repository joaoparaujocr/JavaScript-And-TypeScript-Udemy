document.addEventListener('click', e => {
    e.preventDefault();
    const elemento = e.target;
    const tagName = elemento.tagName.toLowerCase();
    if(tagName === 'a') {
        carregaPagina(elemento);
    }
})

async function carregaPagina(el) {
    const href = el.getAttribute('href');
    try {
        const response = await fetch(href);
        if (response.status !== 200) throw new Error(`${response.status}: ${response.statusText}`);
        const html = await response.text();
        carregaHTML(html);
    } catch (error) {
        console.error(error)
    }
}

function carregaHTML(html) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = html;
}