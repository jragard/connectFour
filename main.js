let boardPos = [
    [0, 0, 0, 0, 0, 0, 0], //boardPos[0]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[1]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[2]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[3]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[4]
    [0, 0, 0, 0, 0, 0, 0] //boardPos[5]
]

const edgeX = boardPos[0].length - 3;
const edgeY = boardPos.length - 3;

let colPos = [0, 0, 0, 0, 0, 0, 0];

// let currentPlayer = "Red";
// let nextPlayer = "Black";

let redPlayerTurn = true;
let blackPlayerTurn = false;

handleClick = function (event) {

    let col = event.target;

    let redDisc = document.createElement("div");
    redDisc.className = "red";
    let blackDisc = document.createElement("div");
    blackDisc.className = "black";

    colPos[col.id]++;

    if (redPlayerTurn === true) {
        col.appendChild(redDisc)
        redPlayerTurn = false;
        blackPlayerTurn = true;
        // currentPlayer = nextPlayer;

        for (let i = boardPos.length - 1; i >= 0; i--) {
            if (boardPos[i][col.id] === 0) {
                boardPos[i][col.id] = 1;
                break;
            }
        }

        if (colPos[col.id] === 6) {
            col.removeEventListener('click', handleClick);
        }

        checkHorizontal();
        checkVertical();
        checkDiagDownRight();
        checkDiagDownLeft();

    } else {
        col.appendChild(blackDisc);
        redPlayerTurn = true;
        blackPlayerTurn = false;
        // currentPlayer = nextPlayer;

        for (let i = boardPos.length - 1; i >= 0; i--) {

            if (boardPos[i][col.id] === 0) {
                boardPos[i][col.id] = 2;
                break;
            }
        }

        if (colPos[col.id] === 6) {
            col.removeEventListener('click', handleClick);
        }

        checkHorizontal();
        checkVertical();
        checkDiagDownRight();
        checkDiagDownLeft();
    }
}

let cols = document.querySelectorAll("#board .col");

for (let i = 0; i < cols.length; i++) {
    cols[i].addEventListener('click', handleClick);
}




// Nested loop for finding n-in-a-row

// let boardPos = [

//               |
//     [0, 0, 0, 0, 0, 0, 0], //boardPos[0]
//     [0, 0, 0, 0, 0, 0, 0], //boardPos[1]
//     [0, 0, 0, 0, 0, 0, 0], //boardPos[2]
//  -- [0, 0, 0, 0, 0, 0, 0], //boardPos[3]
//     [0, 0, 0, 0, 0, 0, 0], //boardPos[4]
//     [0, 0, 0, 0, 0, 0, 0] //boardPos[5]
// ]

function checkHorizontal() {
    for (let y = 0; y < boardPos.length; y++) {
        let row = boardPos[y];

        for (let x = 0; x < edgeX; x++) {
            let cell = row[x];

            if (cell !== 0) {

                if (cell === boardPos[y][x + 1] && cell === boardPos[y][x + 2] && cell === boardPos[y][x + 3]) {
                    // function printWin()
                    let destination = document.getElementById("winMessage");
                    let text = document.createTextNode("You Win!");

                    destination.appendChild(text);
                }
            }
        }
    }
}

function checkVertical() {
    for (y = 0; y < edgeY; y++) {
        let row = boardPos[y];

        for (let x = 0; x < boardPos[0].length; x++) {
            let cell = row[x];

            if (cell !== 0) {

                if (cell === boardPos[y + 1][x] && cell === boardPos[y + 2][x] && cell === boardPos[y + 3][x]) {
                    let destination = document.getElementById("winMessage");
                    let text = document.createTextNode("You Win!");

                    destination.appendChild(text);
                }
            }
        }
    }
}

function checkDiagDownRight() {
    for (let y = 0; y < edgeY; y++) {
        let row = boardPos[y];

        for (let x = 0; x < edgeX; x++) {
            let cell = row[x];

            if (cell !== 0) {

                if (cell === boardPos[y + 1][x + 1] && cell === boardPos[y + 2][x + 2] && cell === boardPos[y + 3][x + 3]) {
                    let destination = document.getElementById("winMessage");
                    let text = document.createTextNode("You Win!");

                    destination.appendChild(text);
                }
            }
        }
    }
}

function checkDiagDownLeft() {
    for (let y = 3; y < boardPos.length; y++) {
        let row = boardPos[y];

        for (let x = 0; x < edgeX; x++) {
            let cell = row[x];

            if (cell != 0) {

                if (cell === boardPos[y - 1][x + 1] && cell === boardPos[y - 2][x + 2] && cell === boardPos[y - 3][x + 3]) {
                    let destination = document.getElementById("winMessage");
                    let text = document.createTextNode("You Win");

                    destination.appendChild(text);
                }
            }
        }
    }
}



// function printWin () {
//     let destination = document.getElementById("winMessage");
//     let text = document.createTextNode("You Win!");
//     destination.appendChild(text);
// }