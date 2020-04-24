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



let nim = async () => {
    let player1Name = await prompt('Player 1, enter your name');
    let player2Name = await prompt('Player 2, enter your name');
    console.log(`Welcome, ${player1Name} and ${player2Name}, to the game of NIM!`)

    // Finish implementing the game of Nim!
    // The game starts with 16 pebbles on the board
    // Two players take turns removing pebbles from the board
    // A player can only take 1, 2, or 3 pebbles on their turn
    // The player who takes the last pebble wins!
    // 
    // FYI: You can convert strings to numbers like this: Number(insertSomeStringHere)
    // BONUS: There's a way for player 2 to always win - can you code an "AI" that beats player 1 every time?

    
}

nim()

