class Helpers extends Game {
  constructor(playerCount) {
    super(playerCount);
    this.playerCount = playerCount;
  }

  getPlayerCurrentPosition(playerNum) {
    return document.querySelector(".player" + playerNum);
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
    return Math.floor(Math.random() * 6) + 1;
  }

  savePlayer1Position(pos) {
    this.playerPosition1 = this.getPlayer1Position() + pos;
    return this.playerPosition1;
  }

  getPlayer1Position() {
    return this.playerPosition1 || 0;
  }

  savePlayer0Position(pos) {
    this.playerPosition0 = this.getPlayer0Position() + pos;
    return this.playerPosition0;
  }

  getPlayer0Position() {
    return this.playerPosition0 || 0;
  }

  getPlayer0TurnCounter() {
    this.player0TurnCounter = this.savePlayer0TurnCounter();
    if (this.player0TurnCounter === 0) {
      this.player0TurnCounter = this.savePlayer0TurnCounter() + 1;
      return 0;
    } else {
      this.player0TurnCounter = this.savePlayer0TurnCounter() + 1;
      return this.player0TurnCounter;
    }
  }

  savePlayer0TurnCounter() {
    return this.player0TurnCounter || 0;
  }

  getPlayer1TurnCounter() {
    this.player1TurnCounter = this.savePlayer1TurnCounter();
    if (this.player1TurnCounter === 0) {
      this.player1TurnCounter = this.savePlayer1TurnCounter() + 1;
      return 0;
    } else {
      this.player1TurnCounter = this.savePlayer1TurnCounter() + 1;
      return this.player1TurnCounter;
    }
  }
  
  savePlayer1TurnCounter() {
    return this.player1TurnCounter || 0;
  }
}