const display = new UI();
const game = new Game("john", 2);

display.initBoard();
game.addPlayers();
game.movePlayer(game.getRandomNumber());
// console.log(randomNumber);


