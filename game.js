class Game {
  constructor(players) {
    this.players = players;
    this.playerCount = players.length;
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
    helpers.highlightCurrentPlayer()
    getTiles.unshift(null);
    let getPlayerClassToRemove = helpers.getPlayerCurrentPosition(playerNum);
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
    console.log(this.players)
    for (let i = this.playerCount - 1; i >= 0; i--) {
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
    let player0Position = helpers.getPlayerCurrentPosition(0);
    let player1Position = helpers.getPlayerCurrentPosition(1);

    if (player0Position || player1Position === 100) {

      // If player won, promt info and ask if they would like to start another game
      console.log("Somebody won");
    }
  }
}