function meuEscopo() {
    const form = document.querySelector('#form');
    const resultado = document.querySelector('#resultado')
    const pessoas = [];

    form.addEventListener('submit', function(evento){
        evento.preventDefault();

        const nome = form.querySelector('#nome');
        const sobrenome = form.querySelector('#sobrenome');
        const peso = form.querySelector('#peso');
        const altura = form.querySelector('#altura');

        function pegaDados(nome, sobrenome, peso, altura){
            return {nome, sobrenome, peso, altura}
        }
        
        pessoas.push(pegaDados(nome.value, sobrenome.value, peso.value, altura.value))

        resultado.innerHTML += `<p>Nome: ${nome.value}, sobrenome:${sobrenome.value}, peso:${peso.value}, altura:${altura.value}</p>`
        console.log(pessoas)
    });
}

meuEscopo();