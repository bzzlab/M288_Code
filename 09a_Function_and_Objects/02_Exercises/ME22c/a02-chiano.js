/**
 * Function: rollDice
 * @param {number} min - Minimum value of the dice range.
 * @param {number} max - Maximum value of the dice range.
 */
function rollDice(min, max) {
    // random nummer zwischen min and max (inclusive).
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // resultat .
    console.log(`draw dice (numbers from ${min} to ${max}): ${randomNumber}`);
}

//  interval setzen ür den Würfel mit input parameters min and max.
// Change the interval time (in milliseconds) as needed.
// Beispiel: rollDice(1, 6)
setInterval(() => rollDice(-5, 11), 1000);
