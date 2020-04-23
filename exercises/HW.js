//****************************************************// 
// The below code implements the "prompt" function,
// which prompts the user for input
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const prompt = (question) => {
    let readlinePromise = new Promise((resolve) => {
        readline.question(`${question}\n`, answer => {
            resolve(answer)
            readline.pause();
        });
    })
    return readlinePromise;
}
//****************************************************//



let ticTacToe = async () => {
    let player1Name = await prompt('Player 1, enter your name');
    let player2Name = await prompt('Player 2, enter your name');
    console.log(`Welcome, ${player1Name} and ${player2Name}, to the game of Tic-Tac-Toe!`)

    // Finish implementing the game of Tic-Tac-Toe!
    // 
    // Hint: You can represent a tic tac toe board by nesting arrays like so:
    let exampleBoard = [
        ['X', '', 'O'], 
        ['O', 'X', ''], 
        ['O', '', 'X']
    ]


}

ticTacToe()

