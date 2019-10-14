class Helpers extends Game {
  constructor() {
    super();
  }

  getPlayerCurrentPosition(playerNum) {
    return document.querySelector(".player" + playerNum);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
  highlightCurrentPlayer() {
    console.log(game.playerTurn);
  }
}