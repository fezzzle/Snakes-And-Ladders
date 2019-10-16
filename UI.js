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
  // addLadder(pos1, pos2) {
  //   const elementToAttchtoOne = document.getElementById(pos1);
  //   const elementToAttchtoTwo = document.getElementById(pos2);

  //   const el1Coords = elementToAttchtoOne.getBoundingClientRect();
  //   const el2Coords = elementToAttchtoTwo.getBoundingClientRect();
  //   console.log("TCL: UI -> addLadder -> el1Coords", el1Coords)
  //   console.log("TCL: UI -> addLadder -> el2Coords", el2Coords)

    // console.log(ladder.style);
    // ladder.style.width = `20px`;
    // ladder.style.height = `300px`;
    // ladder.style.top = `${el1Coords.top}px`
    // ladder.style.left = `${el1Coords.left}px`

    // ladder.classList.add("ladder");
    // document.body.append(ladder);
  // }
}

function createLineElement(x, y, length, angle) {
  var line = document.createElement("div");
  var styles = 'border: 1px solid black; '
             + 'width: ' + length + 'px; '
             + 'height: 0px; '
             + '-moz-transform: rotate(' + angle + 'rad); '
             + '-webkit-transform: rotate(' + angle + 'rad); '
             + '-o-transform: rotate(' + angle + 'rad); '  
             + '-ms-transform: rotate(' + angle + 'rad); '  
             + 'position: absolute; '
             + 'top: ' + y + 'px; '
             + 'left: ' + x + 'px; ';
  line.setAttribute('style', styles);  
  return line;
}

function createLine(x1, y1, x2, y2) {
  var a = x1 - x2,
      b = y1 - y2,
      c = Math.sqrt(a * a + b * b);

  var sx = (x1 + x2) / 2,
      sy = (y1 + y2) / 2;

  var x = sx - c / 2,
      y = sy;

  var alpha = Math.PI - Math.atan2(-b, a);

  return createLineElement(x, y, c, alpha);

}


document.body.addEventListener("mouseup", getCoords);

// function getCoords(e) {
//   console.log(e);
//   const elementToAttchtoOne = document.getElementById(14).getBoundingClientRect();
//   console.log(elementToAttchtoOne);
//   const elementToAttchtoTwo = document.getElementById(37).getBoundingClientRect();
//   console.log(elementToAttchtoTwo);
//   let savefirstCoord = (e.screenX - elementToAttchtoOne.x);
//   let firstCoord = e.screenX - savefirstCoord;
//   document.body.appendChild(createLineElement(firstCoord, elementToAttchtoTwo.x, 400, 5));
// }

