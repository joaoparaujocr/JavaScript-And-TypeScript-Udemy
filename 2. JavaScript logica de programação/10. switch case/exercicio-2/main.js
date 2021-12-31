const titulo = document.querySelector('.container h1');
const data = new Date();
const dia = verificandoDia(data.getDay());
const mes = verificandoMes(data.getMonth());
titulo.innerHTML = `${dia}, ${data.getDate()} de ${mes} de ${data.getFullYear()}<br>
${data.getHours() < 10 ? '0' + data.getHours() : data.getHours()}:${data.getMinutes() < 10 ? '0' + data.getMinutes() : data.getMinutes()}`;

function verificandoMes(mesNumber) {
    let mesDoAno;
    let listaDeMeses = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto',
        'setembro', 'outubro', 'novembro', 'dezembro']
    switch (mesNumber) {
        case 0:
            mesDoAno = listaDeMeses[0];
            break;
        case 1:
            mesDoAno = listaDeMeses[1];
            break;
        case 2:
            mesDoAno = listaDeMeses[2];
            break;
        case 3:
            mesDoAno = listaDeMeses[3];
            break;
        case 4:
            mesDoAno = listaDeMeses[4];
            break;
        case 5:
            mesDoAno = listaDeMeses[5];
            break;
        case 6:
            mesDoAno = listaDeMeses[6];
            break;
        case 7:
            mesDoAno = listaDeMeses[7];
            break;
        case 8:
            mesDoAno = listaDeMeses[8];
            break;
        case 9:
            mesDoAno = listaDeMeses[9];
            break;
        case 10:
            mesDoAno = listaDeMeses[10];
            break;
        case 11:
            mesDoAno = listaDeMeses[11];
            break;

        default:
            break;
    }
    return mesDoAno;
}

function verificandoDia(diaSemana) {
    let diaDaSemanaTexto;
    switch (diaSemana) {
        case 0:
            diaDaSemanaTexto = "Domingo";
            break;

        case 1:
            diaDaSemanaTexto = "Segunda-feira";
            break;

        case 2:
            diaDaSemanaTexto = "Terça-feira";
            break;

        case 3:
            diaDaSemanaTexto = "Quarta-feira";
            break;

        case 4:
            diaDaSemanaTexto = "Quinta-feira";
            break;

        case 5:
            diaDaSemanaTexto = "Sexta-feira";
            break;

        case 6:
            diaDaSemanaTexto = "Sábado";
            break;
        default:
            break;
    }
    return diaDaSemanaTexto;
}