



function getValuaeName(childCell,name){
    return childCell.attributes[`${name}`].value
}

//return chessman on chessboard
function browseTheArray(Array2D){
    for( i in Array2D){
        for(j in Array2D[i]){
            if (Array2D[i][j].classList.contains("chessman")){
                //dosomething
            }
        }
    }
}

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
            if(cell.classList.contains("chessman")){
                cell.innerText = getValuaeName(cell,"name");
            }
            row.push(cell);
            count++;
        }
        chessboard.push(row);
    }
    return chessboard;

}

function makeNextStep(color){
    var start = 0, end = 5;
    if(color == "red"){
        start = 5;
        end = 10;
    }
    for(let i=start; i<end; i++){
        for(let j=0; j<9; j++){
            var cell = chessboard[i][j];
            if(cell.classList.contains("chessman")){
                doSomething(cell);
            }
        }
    }
}

//return index_list
function doSomething(chessman){
    // console.log(chessman)

    var chessname = getValuaeName(chessman,"name");
    var row = getValuaeName(chessman,"row");
    var col = getValuaeName(chessman,"col");
    // console.log(`[${chessname}]: ${row}:${col}`);
    // switch(chessname) {
    //     case "soldier":
    //         // console.log(getValuaeName(chessman,"row"),getValuaeName(chessman,"col"));
    //       // code block
    //       break;
    //     case "":
    //       // code block
    //       break;
    //     default:
    //       // code block
    //   }

    return [[0,1]]; // index on chessboard
}

function changeChessboard(row,col,newrow,newcol){
    var tmp = chessboard[row][col];
    chessboard[newrow][newcol].innerText = chessboard[row][col].innerText;
    chessboard[newrow][newcol].setAttribute("name",getValuaeName(chessboard[row][col],"name"));
    chessboard[newrow][newcol].classList.add("chessman");
    chessboard[row][col].innerText = "";
    chessboard[row][col].removeAttribute("name");
    chessboard[row][col].classList.remove("chessman");

}
function moveByClick(){
    for( i in chessboard){
        for(j in chessboard[i]){
            if (chessboard[i][j].classList.contains("chessman")){
                chessboard[i][j].onclick = ()=>{
                    console.log(chessboard[i][j]);
                    // chessboard[i][j].classList.// bật tắt click
                }
            }
        }
    }

}
var chessboard = makeChessboard();
// makeNextStep("red");

moveByClick(chessboard);
