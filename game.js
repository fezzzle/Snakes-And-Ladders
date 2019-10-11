class Game {
  constructor(name, playerCount) {
    this.name = name;
    this.playerCount = playerCount;
  }
  nextPlayerMove() {
    this.count = this.getPlayerTurn() + 1;
    if (this.count === this.playerCount) this.count = 0;
    return this.count;
  }
  
  getPlayerTurn() {
    return this.count || 0;
  }
  
  getRandomNumber() {
    return Math.floor(Math.random() * 6);
  }

  paintPlayers(playerNum, position) {
    const getTiles = Array.from(document.querySelectorAll(".tile")).reverse();
    let getPlayerClassToRemove = this.getPlayerPosition(playerNum);

    if (getTiles[0].hasChildNodes) {
      getPlayerClassToRemove.remove();
    }
    
    let attachPlayerToTile = document.getElementById(position);
    let div = document.createElement("div");
    div.classList.add("player" + playerNum);
    getTiles[position].append(div);
  }
  
  getPlayerPosition(playerNum) {
    return document.querySelector(".player" + playerNum);
  }

  addPlayers() {
    const playerCount = this.playerCount;
    for (let i = playerCount - 1; i >= 0; i--) {
      const div = document.createElement("div");
      div.classList.add("player" + i);
      document.getElementById("1").append(div);
    }
  }
  
  movePlayer(diceNumber) {
    const getTiles = Array.from(document.querySelectorAll(".tile")).reverse();
    const startPositon = 0;

    let player0TurnCounter = 0;
    let player1TurnCounter = 0;
    let player0NextPosition = null;
    let player1NextPosition = null;
    
    
    if (this.getPlayerTurn() === 0) {
      player0NextPosition = Number(getTiles[startPositon + diceNumber].getAttribute("id"));
      this.paintPlayers(0, player0NextPosition);
      player0TurnCounter += 1;
      this.nextPlayerMove();
    } else if (this.getPlayerTurn() === 1) {
      player1NextPosition = Number(getTiles[startPositon + diceNumber].getAttribute("id"));
      this.paintPlayers(1, player1NextPosition);
      player1TurnCounter += 1;
      this.nextPlayerMove();
    }
  }



}