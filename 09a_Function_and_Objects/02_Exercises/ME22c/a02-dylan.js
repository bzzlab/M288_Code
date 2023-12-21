function drawDice(min, max) {
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`draw dice (numbers from ${min} to ${max}): ${randomNumber}`);
}

for (let i = 0; i < 6; i++) {
    drawDice(1, 6);
}


for (let j = 0; j < 7; j++) {
    drawDice(-5, 11);
}
