// let playerNames = [];

// const playerCount = prompt("How many players would like to play? Max 4 people");
// console.log("TCL: playerCount", playerCount)
// const player0 = prompt("Enter player 1 name");
// console.log("TCL: player0", player0)
// const player1 = prompt("Enter player 2 name");
// console.log("TCL: player1", player1)
// const player2 = prompt("Enter player 3 name");
// console.log("TCL: player2", player2)
// const player3 = prompt("Enter player 4 name");
// console.log("TCL: player3", player3)

// playerNames.push(player0, player1, player2, player3);
// console.log(playerNames);

const players = ["Mari", "Kaspar", "Stiiven", "Tõnu"]

const display = new UI();
// const game = new Game(...playerNames, playerCount);
const game = new Game(players);
const helpers = new Helpers();



display.initBoard();
game.addPlayerNames();
game.addPlayers();


document.getElementById("diceBtn").addEventListener("mouseup", rollDice);
function rollDice() {
  game.movePlayer(helpers.getRandomNumber(), game.playerTurn);
};
