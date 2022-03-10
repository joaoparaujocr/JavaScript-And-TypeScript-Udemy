const { texto } = require('./base');
const regExp1 = /(maria|joão)(, hoje sua esposa)/i;
const found = regExp1.exec(texto);

// console.log(found[0]);
// console.log(found[1]);
// console.log(found[2]);