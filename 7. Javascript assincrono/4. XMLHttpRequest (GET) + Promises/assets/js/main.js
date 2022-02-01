const request = obj => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
        if(xhr.status >= 200 && xhr.status < 300) {
            obj.success(xhr.responseText);
        } else {
            obj.error({
                status: xhr.statusText,
                code: xhr.status
            });
        }
    });
}

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a') {
        e.preventDefault();
        carregaPagina(el);
    }
})

function carregaPagina(el) {
    const href = el.getAttribute('href');

    request({
        method: "GET",
        url: href,
        success(response) {
            carregaResultado(response);
        },
        error(errorText) {
            const resultado = document.querySelector('.resultado');
            resultado.innerHTML = errorText.status + ' ' + errorText.code;
        }
    })
}

function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}