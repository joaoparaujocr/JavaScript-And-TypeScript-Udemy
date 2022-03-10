const { cpfs } = require('./base');
const regExp1 = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
const regExp2 = /(\d{3}\.){2}\d{3}-\d{2}/g;
console.log(cpfs.match(regExp1));
console.log(cpfs.match(regExp2));