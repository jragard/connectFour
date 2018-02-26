let boardPos = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

const edgeX = boardPos[0].length - 3;
const edgeY = boardPos.length - 3;

let colPos = [0, 0, 0, 0, 0, 0, 0];

let firstPlayer = true;

handleClick = function (event) {
    let playerNum;
    let col = event.target;

    colPos[col.id]++;

    swapPlayer(col)

    if (colPos[col.id] === 6) {
        col.removeEventListener('click', handleClick);
    }

    for (let y = boardPos.length - 1; y >= 0; y--) {
        if (boardPos[y][col.id] === 0) {
            boardPos[y][col.id] = playerNum
        }
    }
    checkRules();
}

let cols = document.querySelectorAll("#board .col");

for (let i = 0; i < cols.length; i++) {
    cols[i].addEventListener('click', handleClick);
}

function swapPlayer(col) {
    let playerNum;
    let disc = document.createElement("div");
    
    if (firstPlayer) {
        playerNum = 1;
        disc.className = "red";
        firstPlayer = false;
    } else {
        playerNum = 2;
        disc.className = "black";
        firstPlayer = true;
    }
    for (let y = boardPos.length - 1; y >= 0; y--) {
        if (boardPos[y][col.id] === 0 || boardPos[y][col.id] === undefined) {
            boardPos[y][col.id] = playerNum;
            break;
            
        }
    }

    col.appendChild(disc);
    
}

function checkHorizontal() {
    for (let y = 0; y < boardPos.length; y++) {
        for (let x = 0; x < edgeX; x++) {
            if (boardPos[y][x] != 0 && boardPos[y][x] != undefined) {
                if (boardPos[y][x] === boardPos[y][x + 1] && boardPos[y][x] === boardPos[y][x + 2] && boardPos[y][x] === boardPos[y][x + 3]) {
                    printWin();
                }
            }
        }
    }
}

function checkVertical() {
    for (y = 0; y < edgeY; y++) {
        for (let x = 0; x < boardPos[0].length; x++) {
            if (boardPos[y][x] !== 0 && boardPos[y][x] != undefined) {
                if (boardPos[y][x] === boardPos[y + 1][x] && boardPos[y][x] === boardPos[y + 2][x] && boardPos[y][x] === boardPos[y + 3][x]) {
                    printWin();
                }
            }
        }
    }
}

function checkDiagDownRight() {
    for (let y = 0; y < edgeY; y++) {
        for (let x = 0; x < edgeX; x++) {
            if (boardPos[y][x] !== 0 && boardPos[y][x] != undefined) {
                if (boardPos[y][x] === boardPos[y + 1][x + 1] && boardPos[y][x] === boardPos[y + 2][x + 2] && boardPos[y][x] === boardPos[y + 3][x + 3]) {
                    printWin();
                }
            }
        }
    }
}

function checkDiagDownLeft() {
    for (let y = 3; y < boardPos.length; y++) {
        for (let x = 0; x < edgeX; x++) {
            if (boardPos[y][x] !== 0 && boardPos[y][x] != undefined) {
                if (boardPos[y][x] === boardPos[y - 1][x + 1] && boardPos[y][x] === boardPos[y - 2][x + 2] && boardPos[y][x] === boardPos[y - 3][x + 3]) {
                    printWin();
                }
            }
        }
    }
}

function printWin() {
    let destination = document.getElementById("winMessage");
    let text = document.createTextNode("YOU WIN!");
    destination.appendChild(text);
}

function checkRules() {

    checkHorizontal();
    checkVertical();
    checkDiagDownRight();
    checkDiagDownLeft();
}