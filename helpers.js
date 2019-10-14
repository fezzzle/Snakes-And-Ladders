class Helpers extends Game {
  constructor(playerCount) {
    super(playerCount);
    this.playerCount = playerCount;
  }

  getPlayerCurrentPosition(playerNum) {
    return document.querySelector(".player" + playerNum);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
}