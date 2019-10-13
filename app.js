const display = new UI();
const game = new Game("Martin", "Dinnu", 2);

display.initBoard();
game.addPlayerNames();
game.addPlayers();


document.getElementById("diceBtn").addEventListener("mouseup", rollDice);
function rollDice() {
  game.movePlayer(game.getRandomNumber());
};
