class Helpers {
  constructor() {
    this.savePlayer = 0;
  }

  getPlayerCurrentPosition(player) {
    return document.querySelector(".player" + player);
  }

  getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }
  highlightCurrentPlayer(player) {
    this.getPlayerCurrentPosition(player).classList.add("highlight");
    if (player !== this.savePlayer) {
      this.getPlayerCurrentPosition(this.savePlayer).classList.remove("highlight");
    }
    this.savePlayer = player;
  }
  showPlayerNameOnTile() {
    
  }
}