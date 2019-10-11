// Problem 1: If we have 2 players then we need to have also two tile div's in the beginning
// Solution 1: Ask before starting, how many players are playing


class UI {
  constructor() {
    this.counter = 101;
    this.gameTable = document.getElementById("gameTable");
  }
  setTiles() {
    
    let makeRowDiv;
    let makeColDiv;
    let makeTextDiv;
    
    for (let i = 0; i < 10; i++) {
      makeRowDiv = document.createElement("div");
      makeRowDiv.classList.add("row", "row" + i);
      this.gameTable.append(makeRowDiv);
      let gameRow = document.querySelector(".row" + i);
      
      for (let j = 0; j < 10; j++) {
        makeColDiv = document.createElement("div");
        makeTextDiv = document.createElement("div");
        this.counter -= 1;
        makeColDiv.classList.add("tile");
        makeColDiv.setAttribute("id", this.counter)
        // At first textContent was on makeColDiv, now moved on makeTextDiv
        // makeColDiv.textContent = this.counter;
        gameRow.append(makeColDiv);


        makeTextDiv.textContent = this.counter;
        makeTextDiv.classList.add("text");
        makeTextDiv.setAttribute("id", "text" + this.counter);
        // makeTextDiv.classList.add("player1");

        // makeTextDiv.dataset.player = this.counter;


        makeColDiv.appendChild(makeTextDiv);
      }
    }
  }

  initBoard() {
    // Call setTiles to paint gameboard and be able to select elements on it
    this.setTiles();

    const startPosition = document.querySelector(".tile1");

    // Get array from NodeList and reverse it, index 0 = 1 position tile on screen
  }
}


