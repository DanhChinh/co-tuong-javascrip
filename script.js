

// var black_open = document.querySelectorAll(".black");
// var red_open = document.querySelectorAll(".red");

function getValuaeName(childCell,name){
    return childCell.attributes[`${name}`].value
}

// var text = getValuaeName(black_open[0],"name");
// console.log(text)

// function createStepOfChariot(row,col){
// }

function makeChessboard() {
    var cells = document.querySelectorAll(".cell");
    var chessboard = [];
    var count = 0;
    for (let i = 0; i < 10; i++) {
        var row = [];
        for (let j = 0; j < 9; j++) {
            var cell = cells[count];
            cell.setAttribute("row", i);
            cell.setAttribute("col", j);
            row.push(cell);
            count++;
        }
        chessboard.push(row);
    }
    return chessboard;

}
function makeChessmans(color){
    var chessmans = [];

    var start = 0;
    var end = 5;
    if(color!="black"){
        start = 5;
        end = 10;
    }

    for (let i = start; i < end; i++) {
        for (let j = 0; j < 9; j++) {
            if(getValuaeName(chessboard[i][j],"name")!="null"){
                chessmans.push(chessboard[i][j])
                ////////////////
                chessboard[i][j].classList.add("green");
                chessboard[i][j].innerText = getValuaeName(chessboard[i][j],"name");
                chessboard[i][j].style.color = "white";
                ////////////////
            }
        }
    }
    return chessmans
}
var chessboard = makeChessboard();
var black_chessmans = makeChessmans("black");
console.log(black_chessmans);
var red_chessmans = makeChessmans("red");
console.log(red_chessmans);