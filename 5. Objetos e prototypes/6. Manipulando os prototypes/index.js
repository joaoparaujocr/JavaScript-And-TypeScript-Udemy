// new Object -> Object.prototype
const objA = {
    chaveA: 'A'
}

const objB = {
    chaveA: 'B'
}

Object.setPrototypeOf(objB, objA);

console.log(objB)