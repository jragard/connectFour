// y = colPos
// x = col.id

let boardPos = [
    [0, 0, 0, 0, 0, 0, 0], //boardPos[0]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[1]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[2]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[3]
    [0, 0, 0, 0, 0, 0, 0], //boardPos[4]
    [0, 0, 0, 0, 0, 0, 0]  //boardPos[5]
]
        //    1  2  3  4  5  6  7
let colPos = [0, 0, 0, 0, 0, 0, 0];

// colPos[col.id] is Disc Count


var redPlayerTurn = true;
var blackPlayerTurn = false;

handleClick = function (event) {

    var col = event.target;

    var redDisc = document.createElement("div");
    redDisc.className = "red";
    var blackDisc = document.createElement("div");
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

            //    break;
            // boardPos[i][col.id] = 1;
            console.log(boardPos[5]);
          
      }
        
        if (colPos[col.id] === 6) {
            col.removeEventListener('click', handleClick);
        }
    }

    else {
        col.appendChild(blackDisc);
        redPlayerTurn = true;
        blackPlayerTurn = false;

        for (let i = boardPos.length - 1; i >= 0; i--) {
           
            if (boardPos[i][col.id] === 0) {
               boardPos[i][col.id] = 2;
               break;
           }

             console.log(boardPos[5]);
        }
        
        if (colPos[col.id] === 6) {
            col.removeEventListener('click', handleClick);
        }
        
    }
}



var cols = document.querySelectorAll("#board .col");

for (let i = 0; i < cols.length; i++) {
    cols[i].addEventListener('click', handleClick);
}    


