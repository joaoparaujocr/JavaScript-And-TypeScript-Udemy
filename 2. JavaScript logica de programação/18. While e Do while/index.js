function random(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

let rand = random(1, 50);
console.log(rand);

do {
    rand = random(1, 50);
    console.log(rand)
} while (rand !== 10);