// Declaração de função (Function hoisting)
function falaOi() {
    console.log('Oie')
}
falaOi();

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function() {
    console.log('Sou um dado');
}
souUmDado();

// Arrow function
const arrow = () => {
    console.log('Sou uma arrow function.');
}
arrow();

// Dentro de um objeto
const obj = {
    falar: () => {
        console.log('Estou falando');
    }
}
obj.falar();