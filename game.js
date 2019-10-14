class Game {
  constructor(player0, player1, playerCount) {
    this.player0 = player0;
    this.player1 = player1;
    this.playerCount = playerCount;
    this.playerTurn = 0;
    this.player0TurnCounter = 0;
    this.player1TurnCounter = 0;
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
    if (position <= 99) {
      getTiles[position].append(div);
    } else {
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
  
  movePlayer(diceNumber, playerTurn) {
    let position = +helpers.getPlayerCurrentPosition(playerTurn).parentElement.id + diceNumber;
    this.paintPlayers(playerTurn, position);
    display.displayDiceResult(diceNumber);
    this.playerTurn += 1;
    if (playerTurn === this.playerCount -1) this.playerTurn = 0;
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