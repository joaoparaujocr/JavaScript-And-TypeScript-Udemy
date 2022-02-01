function request(url) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.send()

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300) {
            success(xhr.responseText);
        } else {
            error({
                code: xhr.status,
                status: xhr.statusText
            });
        }
    })
}

document.addEventListener('click', e => {
    const elemento = e.target;
    const tagElemento = elemento.tagName.toLowerCase();

    if (tagElemento === 'a') {
        e.preventDefault();
        const href = elemento.getAttribute('href');
        request(href)
    }

    e.preventDefault()
})

function success(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response
}

function error(e) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = `${e.code} ${e.status}`
}