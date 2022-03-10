const { cpfs2 } = require('./base');

// ^ -> começa com
// $ -> termina com
// [^] -> Negação
// m - multiline, flag
const cpgRegExp = /^(\d{3}\.){2}\d{3}-\d{2}$/gm;

console.log(cpfs2.match(cpgRegExp));