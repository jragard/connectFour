// let board = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 2, 0],
//     [0, 0, 0, 0, 1, 1, 1],
//     [0, 0, 2, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0]
// ]

var redPlayerTurn = true;
var blackPlayerTurn = false;

var col1 = document.querySelector("#column1");

col1.onclick = function () {
    var redDisc = document.createElement("div");
    redDisc.className = "red";
    var blackDisc = document.createElement("div");
    blackDisc.className = "black";
    // var destination = document.getElementById("column1");
    // destination.appendChild(redDisc);
    
    if (redPlayerTurn === true) {
        var destination = document.getElementById("column1");
        destination.appendChild(redDisc);
        redPlayerTurn = false;
        blackPlayerTurn = true;
    }

    else {
        var destination = document.getElementById("column1");
        destination.appendChild(blackDisc);
        redPlayerTurn = true;
        blackPlayerTurn = false;
    }
}