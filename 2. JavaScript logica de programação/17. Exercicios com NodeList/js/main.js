const paragrafos = document.querySelector('.paragrafos');
const pS = paragrafos.querySelectorAll('p');
const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of pS) {
    p.style.backgroundColor = backgroundColorBody;
    p.style.padding = '10px';
    p.style.color = 'white';
}