let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

var redPlayerTurn = true;
var blackPlayerTurn = false;
let discCount = 0;

handleClick = function (event) {

    // let discCount = 0;

    var redDisc = document.createElement("div");
    redDisc.className = "red";
    var blackDisc = document.createElement("div");
    blackDisc.className = "black";
    
    
    if (redPlayerTurn === true) {
        var destination = document.getElementById("column1");
        destination.appendChild(redDisc);
        redPlayerTurn = false;
        blackPlayerTurn = true;
        discCount++;

        if (discCount === 6) {
            col1.removeEventListener('click', handleClick); 
         }
    }

    else {
        var destination = document.getElementById("column1");
        destination.appendChild(blackDisc);
        redPlayerTurn = true;
        blackPlayerTurn = false;
        discCount++;

        if (discCount === 6) {
            col1.removeEventListener('click', handleClick); 
         }
    }

    

    // if (discCount === 6) {
    //     col1.removeEventListener('click', handleClick); 
    //  }

}

var col1 = document.querySelector("#column1");

col1.addEventListener('click', handleClick);



// col1.onclick = function () {

//     let discCount = 0;

//     var redDisc = document.createElement("div");
//     redDisc.className = "red";
//     var blackDisc = document.createElement("div");
//     blackDisc.className = "black";
    
    
//     if (redPlayerTurn === true) {
//         var destination = document.getElementById("column1");
//         destination.appendChild(redDisc);
//         redPlayerTurn = false;
//         blackPlayerTurn = true;
//         discCount++;

//         if (discCount === 6) {
            
//         }
//     }

//     else {
//         var destination = document.getElementById("column1");
//         destination.appendChild(blackDisc);
//         redPlayerTurn = true;
//         blackPlayerTurn = false;
//     }

    
// }