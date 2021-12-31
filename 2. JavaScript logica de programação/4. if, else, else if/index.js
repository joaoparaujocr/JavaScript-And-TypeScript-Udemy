const hora = 25;

// If = pode ser utilizado sozinho
// else = so pode ser usado após a criação de um if
// else if = pode se ter varios

if (hora >= 0 && hora <= 11){
    console.log('Bom dia!');
} else if (hora >= 12 && hora <= 17){
    console.log('Boa tarde!')
} else if (hora >= 18 && hora <= 23){
    console.log('Boa noite!')
} else {
    console.log('Olá!')
}