const objA = { chave: 'objA' }

const objB = { chave: 'objB' }

const objC = new Object()
objC.chave = 'objC'

Object.setPrototypeOf(objB, objA);
Object.setPrototypeOf(objC, objB);

console.log(Object.getPrototypeOf(objC))