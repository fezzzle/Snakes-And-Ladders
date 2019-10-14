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

  addPlayerNames() {
    let names = game.players;
    const name = document.getElementById("name");
    for (let i = 0; i < names.length; i++) {
      const p = document.createElement("p");
      p.textContent = `Player${i + 1}: ${names[i]}`;
      name.append(p);
    }
  }

  showPlayerNameOnTile(player) {
    let playerPos = this.getPlayerCurrentPosition(player);
    let parentId = playerPos.parentElement.id;
    let getText = document.getElementById("text" + parentId);
    getText.textContent = game.players[player];
    getText.classList.add(game.players[player].toLowerCase());
    let arrayOfIndeces = Array.from(document.getElementsByClassName(game.players[player].toLowerCase()));
    if (arrayOfIndeces.length > 1) {
      arrayOfIndeces[1].textContent = parentId;
    }
  }
}