function convertendoData(data){
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    return `Dia ${dia}/ mês ${mes}/ ano ${ano}`;
}

const data = new Date();
const dataBrasil = convertendoData(data);
console.log(dataBrasil)

/*
const quatroHoras = 60 * 60 * 4 * 1000;
const umDia = 60 * 60 * 24 * 1000;
const data = new Date(0 + umDia);
console.log(data.toString());


// const data = new Date(2019, 3, 20, 15, 14, 27); // ano, mes, dia, hora, minuti, segundos, milesimos
const data = new Date(1634680497033)
console.log(`Dia ${data.getDate()}, mês ${data.getMonth() + 1}, ano ${data.getFullYear()}`);
console.log(`Hora ${data.getHours()}, minutos ${data.getMinutes()}, segundos ${data.getSeconds()}`)
console.log(`Milisegundos ${data.getMilliseconds()}, Dia da semana ${data.getDay()}`);
console.log(data.toString())

console.log(Date.now()) 
*/