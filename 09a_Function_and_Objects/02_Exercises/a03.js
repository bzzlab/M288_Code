/*
Task: Create a guess game with a dice 1 to 6.
Sample run:

=========================================
Guess Game v0.1
=========================================

(S)art game or (E)xit? s
What number to you guess (1 to 6)? 6
You guessed right! You: 6 and Computer: 6
(S)art game or (E)xit? s
What number to you guess (1 to 6)? 3
You guessed wrong! You: 3 and Computer: 4
(S)art game or (E)xit? s
What number to you guess (1 to 6)? 4
You guessed wrong! You: 4 and Computer: 3
(S)art game or (E)xit? e
Exit game ..
 */


const readline = require('readline');
function askQuestion(query) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    return new Promise(resolve => rl.question(query, ans => {
        rl.close();
        resolve(ans);
    }))
}

let title = '=========================================\n' +
    `Guess Game v0.1\n` +
    '=========================================\n';
/**
 * draw guess
 * @param guess: my guess
 * @returns {{number: number, guess: boolean}}
 */
let drawGuess = function (guess){
    let min=1,max=6;
    let randonNum = Math.floor(Math.random()*(max-min+1))+min;
    return {"guess": guess===randonNum, "number": randonNum}
}
/**
 * check guess
 * @param me: my guess
 * @returns {string}
 */
let checkGuess = function (me){
    let result = drawGuess(me);
    let feedback = `You guessed wrong: You ${me}, Computer ${result.number}!`
    if (result.guess){
        feedback = `You guessed right: You ${me}, Computer ${result.number}!`
    }
    return feedback;
}
console.log(title);

function menu() {
    let ans = askQuestion("(S)tart or (E)xit? ");
    ans.then(data => {
        let msg = 'Unknown operation!';
        let value = data.toUpperCase();
        switch (value){
            case 'S':
                ans = askQuestion("Make a guess: ");
                ans.then(data => {
                    let guess = parseInt(data);
                    console.log(checkGuess(guess));
                    menu();
                })
                break;
            //case E
            case 'E'://??
                msg = 'Exit game ..';//??
                console.log(msg);//??
                return 0;//??
            //case default
            default://??
                value = 'n/a';//??
                console.log(msg);//??
                return 2;//??
        }
    })
}

//call menu
menu();
