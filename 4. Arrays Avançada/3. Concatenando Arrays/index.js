const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [7, 8, 9]
// const a4 = a1.concat(a2, a3, 'João');
const a4 = [...a1, ...a2, ...a3, 'joão', ...[10, 11, 12]];
console.log(a4)