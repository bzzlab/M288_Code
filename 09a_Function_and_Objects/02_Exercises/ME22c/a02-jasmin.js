function dice(min, max) {
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(`draw dice (numbers from ${min} to ${max}): ${randomNum}`);//??
}

setInterval(dice, 1000, -5,11);//??

/*
console.log(dice(1, 6));
console.log(dice(-5, 11));
*/
