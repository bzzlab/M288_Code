const readline = require('readline');

function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }));
}

let title = '===================\n' +
    `Guess Game\n` +
    '===================\n';

let drawGuess = function (guess) {
    let min = 1, max = 6;
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return {"guess": guess === randomNum, "number": randomNum};
};

let checkGuess = function (me) {
    let result = drawGuess(me);
    let feedback = `Falsch: Du ${me}, Compi ${result.number}!`;
    if (result.guess) {
        feedback = `Richtig: Du ${me}, Compi ${result.number}!`;
    }
    return feedback;
};

console.log(title);

async function menu() {
    let score = 0;

    for (let attempt = 1; attempt <= 10; attempt++) {
        let ans = await askQuestion(`Rat ä Zahl zwüschet 1 und 10: `);
        let guess = parseInt(ans);
        console.log(checkGuess(guess));

        if (checkGuess(guess).includes("Richtig")) {
            score++;
        }
    }

    console.log(`Game Over! Score: ${score}/10`);

    let playAgain = await askQuestion("(S)tart neus Game oder (V)erlah? ");
    if (playAgain.toUpperCase() === 'S') {
        menu();
    } else {
        console.log('Game verlah ..');
        process.exit();
    }
}

menu();
