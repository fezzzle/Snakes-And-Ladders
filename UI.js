// Problem 1: If we have 2 players then we need to have also two tile div's in the beginning
// Solution 1: Ask before starting, how many players are playing


class UI {
  constructor() {
    this.counter = 51;
    this.gameTable = document.querySelector(".content");
  }

  addRollDiceButton() {
    const selectParent = document.querySelector(".aside");
    const button = document.createElement("button");
    button.setAttribute("id", "diceBtn");
    button.textContent = "Roll Dice"
    selectParent.append(button);
  }
  displayDiceResult(dieResult) {
    const result = document.getElementById("diceResult");
    result.textContent = dieResult;
  }

  setTiles() {
    
    let makeRowDiv;
    let makeColDiv;
    let makeTextDiv;
    
    for (let i = 0; i < 5; i++) {
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
        gameRow.append(makeColDiv);
        makeTextDiv.textContent = this.counter;
        makeTextDiv.classList.add("text");
        makeTextDiv.setAttribute("id", "text" + this.counter);
        makeColDiv.appendChild(makeTextDiv);
      }
    }
  }

  initBoard() {
    // Call setTiles to paint gameboard and be able to select elements on it
    this.setTiles();
    this.addRollDiceButton();
    this.displayDiceResult("Start");
  }
  addLadder(pos1, pos2) {
    const createDiv = document.createElement("div");
    const elementToAttchtoOne = document.getElementById(pos1);
    const elementToAttchtoTwo = document.getElementById(pos2);
    let elementToAttchToOneObj = elementToAttchtoOne.getBoundingClientRect();
    console.log("TCL: UI -> addLadder -> First element", elementToAttchToOneObj)
    console.log("TCL: UI -> addLadder -> First element Y COORDS", elementToAttchToOneObj.y)
    let elementToAttchToTwoObj = elementToAttchtoTwo.getBoundingClientRect();
    console.log("TCL: UI -> addLadder -> Second element", elementToAttchToTwoObj)
    console.log("TCL: UI -> addLadder -> Second element Y COORDS", elementToAttchToTwoObj.y)
  }
}


