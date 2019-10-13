class Game {
  constructor(player0, player1, playerCount) {
    this.player0 = player0;
    this.player1 = player1;
    this.playerCount = playerCount;
  }
  addPlayerNames() {
    let names = [this.player0, this.player1];
    console.log("TCL: Game -> addPlayerNames -> names", names)
    const name = document.getElementById("name");
    for (let i = 0; i < names.length; i++) {
      const p = document.createElement("p");
      p.textContent = `Player${i + 1}: ${names[i]}`;
      name.append(p);
    }
  }
  nextPlayerMove() {
    this.count = this.getPlayerTurn() + 1;
    if (this.count === this.playerCount) this.count = 0;
    return this.count;
  }

  getPlayerTurn() {
    return this.count || 0;
  }

  savePlayer0Position(pos) {
    this.playerPosition0 = this.getPlayer0Position() + pos;
    return this.playerPosition0;
  }

  getPlayer0Position() {
    return this.playerPosition0 || 0;
  }
  
  savePlayer1Position(pos) {
    this.playerPosition1 = this.getPlayer1Position() + pos;
    return this.playerPosition1;
  }

  getPlayer1Position() {
    return this.playerPosition1 || 0;
  }

  getPlayer0TurnCounter(num) {
    this.player0TurnCounter = this.savePlayer0TurnCounter() + 1
    return this.player0TurnCounter;
  }
  
  getPlayer1TurnCounter(num) {
    this.player0TurnCounter = this.savePlayer0TurnCounter() + 1
    return this.player0TurnCounter;
  }

  savePlayer0TurnCounter() {
    return this.player0TurnCounter || 0;
  }

  savePlayer1TurnCounter() {
    return this.player1TurnCounter || 0;
  }
  
  getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
  }

  paintPlayers(playerNum, position) {
    const getTiles = Array.from(document.querySelectorAll(".tile")).reverse();
    getTiles.unshift(null);
    console.log(getTiles[1]);
    let getPlayerClassToRemove = this.getPlayerCurrentPosition(playerNum);

    // This is problematic. It checks the first tile and then removes player tiles.
    if (getTiles[1].hasChildNodes) {
      getPlayerClassToRemove.remove();
    }

    let div = document.createElement("div");
    div.classList.add("player" + playerNum);
    if (position > 100) {
      getPlayerClassToRemove.remove();
      // this.determineGameEnd();
    } else if (position <= 99) {
      getTiles[position].append(div);
    }
  }
  
  getPlayerCurrentPosition(playerNum) {
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
    
    
    if (this.getPlayerTurn() === 0 && this.getPlayer0TurnCounter() === 0) {
      let position = this.savePlayer0Position(Number(getTiles[startPositon + diceNumber].getAttribute("id")));
      console.log("Player:", this.getPlayerTurn(), "DiceRoll:", diceNumber, "Player positon in array:", position, "Positon on board:", position);
      this.paintPlayers(0, position);
      this.nextPlayerMove();
      
    } else if (this.getPlayerTurn() === 0 && this.getPlayer0TurnCounter() > 0) {
      console.log(this.savePlayer0Position())
      this.savePlayer0Position() += diceNumber;
      this.player0TurnCounter() + 1;
      
    } else if (this.getPlayerTurn() === 1 && this.getPlayer1TurnCounter() === 0) {
      let position = this.savePlayer1Position(Number(getTiles[startPositon + diceNumber].getAttribute("id")));
      
      console.log("Player:", this.getPlayerTurn(), "DiceRoll:", diceNumber, "Player positon in array:", position, "Positon on board:", position);
      this.paintPlayers(1, position);
      this.savePlayer1TurnCounter();
      this.nextPlayerMove();
      
    } else if (this.getPlayerTurn() === 1 && this.getPlayer1TurnCounter() > 0) {
      this.savePlayer1Position() += diceNumber;
      this.player1TurnCounter() + 1;
    }
    display.displayDiceResult(diceNumber);
  }

  // determineGameEnd() {
  //   let player0Position = this.getPlayer0Position();
  //   let player1Position = this.getPlayer1Position();

  //   if (player0Position || player1Position > 99) {
  //     this.paintPlayers(0, 0);
  //     this.paintPlayers(1, 0);
  //   }
  // }
}