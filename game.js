class Game {
  constructor(players) {
    this.players = players;
    this.playerCount = players.length;
    this.playerTurn = 0;
    this.player0TurnCounter = 0;
    this.player1TurnCounter = 0;
  }
  
  paintPlayers(player, position) {
    const getTiles = Array.from(document.querySelectorAll(".tile")).reverse();
    getTiles.unshift(null);
    helpers.getPlayerCurrentPosition(player).remove();
    
    let div = document.createElement("div");
    div.classList.add("player" + player);
    if (position <= 99) {
      getTiles[position].append(div);
      helpers.showPlayerNameOnTile(player);
      helpers.highlightCurrentPlayer(player);
    } else {
      getTiles[100].append(div);
      helpers.showPlayerNameOnTile(player);
      helpers.highlightCurrentPlayer(player);
      this.determineGameEnd();
    }
  }
  
  addPlayers() {
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