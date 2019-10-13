class Game {
  constructor(player0, player1, playerCount) {
    this.player0 = player0;
    this.player1 = player1;
    this.playerCount = playerCount;
  }


  addPlayerNames() {
    let names = [this.player0, this.player1];
    const name = document.getElementById("name");
    for (let i = 0; i < names.length; i++) {
      const p = document.createElement("p");
      p.textContent = `Player${i + 1}: ${names[i]}`;
      name.append(p);
    }
  }  
  
  paintPlayers(playerNum, position) {
    const getTiles = Array.from(document.querySelectorAll(".tile")).reverse();
    getTiles.unshift(null);
    let getPlayerClassToRemove = helpers.getPlayerCurrentPosition(playerNum);
    console.log("TCL: Game -> paintPlayers -> getPlayerClassToRemove", getPlayerClassToRemove);

    getPlayerClassToRemove.remove();

    let div = document.createElement("div");
    div.classList.add("player" + playerNum);
    if (position === 100) {
      getTiles[position].append(div);
      this.determineGameEnd();
    } else if (position <= 99) {
      getTiles[position].append(div);
    } else if (position > 100) {
      getTiles[100].append(div);
      this.determineGameEnd();
    }
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
    
    if (helpers.getPlayerTurn() === 0) {
      const player0Counter = helpers.getPlayer0TurnCounter();

      if (player0Counter === 0) {

        let position = helpers.savePlayer0Position(Number(getTiles[startPositon + diceNumber].getAttribute("id")));
        this.paintPlayers(0, helpers.getPlayer0Position());
        helpers.savePlayer0TurnCounter();
        // console.log("Player:", this.getPlayerTurn(), "DiceRoll:", diceNumber, "Player positon in array:", position, "Positon on board:", position);
      } else {
        // previousPos is only used in logging
        let previousPos = helpers.getPlayer0Position()
        helpers.savePlayer0Position(diceNumber);
        this.paintPlayers(0, helpers.getPlayer0Position());
        // console.log("Player:", this.getPlayerTurn(), "DiceRoll:", diceNumber, "PreviousPos:", previousPos);
        helpers.savePlayer0TurnCounter();
      }
    }
    
    if (helpers.getPlayerTurn() === 1) {
      const player1Counter = helpers.getPlayer1TurnCounter();
      
      if (player1Counter === 0) {
        let position = helpers.savePlayer1Position(Number(getTiles[startPositon + diceNumber].getAttribute("id")));
        this.paintPlayers(1, helpers.getPlayer1Position());
        helpers.savePlayer1TurnCounter();
        // console.log("Player:", this.getPlayerTurn(), "DiceRoll:", diceNumber, "Player positon in array:", position, "Positon on board:", position);
      } else {
        // previousPos is only used in logging
        let previousPos = helpers.getPlayer1Position()
        helpers.savePlayer1Position(diceNumber);
        this.paintPlayers(1, helpers.getPlayer1Position());
        // console.log("Player:", this.getPlayerTurn(), "DiceRoll:", diceNumber, "PreviousPos:", previousPos);
        helpers.savePlayer1TurnCounter();
        }
      }
    helpers.nextPlayerMove();
    display.displayDiceResult(diceNumber);
}

  determineGameEnd() {
    let player0Position = helpers.getPlayer0Position();
    let player1Position = helpers.getPlayer1Position();

    if (player0Position || player1Position === 100) {

      // If player won, promt info and ask if they would like to start another game
      console.log("Somebody won");
    }
  }
}