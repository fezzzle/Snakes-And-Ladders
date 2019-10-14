const display = new UI();
const game = new Game("Toomas", "Mari", 2);
const helpers = new Helpers(2);


display.initBoard();
game.addPlayerNames();
game.addPlayers();


document.getElementById("diceBtn").addEventListener("mouseup", rollDice);
function rollDice() {
  game.movePlayer(helpers.getRandomNumber(), game.playerTurn);
};
