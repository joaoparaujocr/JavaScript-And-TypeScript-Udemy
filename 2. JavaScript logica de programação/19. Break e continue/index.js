const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for(let num of numeros) {
    if(num === 5 || num === 7){
        continue
    }
    console.log(num)
}