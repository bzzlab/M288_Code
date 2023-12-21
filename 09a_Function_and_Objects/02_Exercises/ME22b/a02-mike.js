function roll(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Sample output for dice with numbers from 1 to 6
let min=-5,max=11;
const result = roll(min, max);
console.log(`roll dice (numbers from ${min} to ${max}): ${result}`);
// Sample output for dice with numbers from -5 to 11
// Uncomment the lines below if you want to include this scenario
/*
const result2 = roll(-5, 11);
console.log(`roll dice (numbers from -5 to 11): ${result2}`);
*/
