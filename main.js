let boardPos = [
    [0, 0, 0, 0, 0, 0, 0], //boardPos[0]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[1]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[2]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[3]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[4]
    [0, 0, 0, 0, 0, 0, 0] //boardPos[5]
]

const edgeX = boardPos[0].length - 3;

let colPos = [0, 0, 0, 0, 0, 0, 0];

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

    } else {
        col.appendChild(blackDisc);
        redPlayerTurn = true;
        blackPlayerTurn = false;

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
    }
}

let cols = document.querySelectorAll("#board .col");

for (let i = 0; i < cols.length; i++) {
    cols[i].addEventListener('click', handleClick);
}




// Nested loop for finding n-in-a-row

// let boardPos = [
//     [0, 0, 0, 0, 0, 0, 0], //boardPos[0]
//     [0, 0, 0, 0, 0, 0, 0], //boardPos[1]
//     [0, 0, 0, 0, 0, 0, 0], //boardPos[2]
//     [0, 0, 0, 0, 0, 0, 0], //boardPos[3]
//     [0, 0, 0, 0, 0, 0, 0], //boardPos[4]
//     [0, 0, 0, 0, 0, 0, 0] //boardPos[5]
// ]

// for (let y = 0; y < boardPos.length; y++) {
//     let row = boardPos[y];

//     for (let x = 0; x < edgeX; x++) {
//         let cell = row[x];

//       if (cell === boardPos[y][x+1] && cell === boardPos[y][x+2]) {
//          let destination = document.getElementById("winMessage");
//          let text = document.createTextNode("You Win!");

//          destination.appendChild(text);

//         }
// }

// }

// const edgeX = boardPos[0].length - 2;

function checkHorizontal () {
    for (let y = 0; y < boardPos.length; y++) {
        let row = boardPos[y];

        for (let x = 0; x < edgeX; x++) {
            let cell = row[x];

            if (cell !== 0) {

                if (cell === boardPos[y][x + 1] && cell === boardPos[y][x + 2] && cell === boardPos[y][x + 3]) {
                    let destination = document.getElementById("winMessage");
                    let text = document.createTextNode("You Win!");

                    destination.appendChild(text);

                }
            }

        }
    }
}