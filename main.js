// let board = [
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 2, 0],
//     [0, 0, 0, 0, 1, 1, 1],
//     [0, 0, 2, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 0, 0, 0]
// ]

var col1 = document.querySelector("#column1");

col1.onclick = function () {
    var redDisc = document.createElement("div");
    redDisc.className = "red";
    var destination = document.getElementById("column1");
    destination.appendChild(redDisc);

}