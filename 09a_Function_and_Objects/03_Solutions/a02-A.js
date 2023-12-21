/*
Task: Create a dice app with printing random numbers from min to max.
Sample output:
draw dice (numbers from 1 to 6): 3
draw dice (numbers from 1 to 6): 5
draw dice (numbers from 1 to 6): 3
draw dice (numbers from 1 to 6): 4
draw dice (numbers from 1 to 6): 6
draw dice (numbers from 1 to 6): 6

Sample output for 1 to 6:
draw dice (numbers from -5 to 11): 9
draw dice (numbers from -5 to 11): -1
draw dice (numbers from -5 to 11): 1
draw dice (numbers from -5 to 11): 6
draw dice (numbers from -5 to 11): 0
draw dice (numbers from -5 to 11): -1
draw dice (numbers from -5 to 11): 2
 */

/**
 * function dime
 * @param min
 * @param max
 */
function dice(min,max){//??
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;//??
console.log(`draw dice (numbers from ${min} to ${max}): ${randomNum}`);//??
}//??

//set interval for dice with input parameter min,max
setInterval(dice, 1000, 1,6);//??
