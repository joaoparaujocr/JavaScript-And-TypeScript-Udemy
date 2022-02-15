const nome = "João";
const sobrenome = "Araújo"

const falaNome = () => {
    console.log(nome, sobrenome)
}

this.nome = nome
this.sobrenome = sobrenome
this.falaNome = falaNome;

console.log(this)
console.log(exports)