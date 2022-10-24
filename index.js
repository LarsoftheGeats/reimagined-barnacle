/*       *********** FUNCTION SETUP BOARD ******************
//Attaches id's to all the squares and rows of the board.  I realized that doing it by hand was dumb about halfway through may
//adopt this to different game types as new game variants are added.  
//To change.  In the for loops 8 may be changed to row and column width. 
//Current thinking is to have a few multi width variations,
//refactor later.  Basic functionality as of 10/12/2022 
*/
const squareClickListener = [];
const boardState = [ ["BR","BN","BB","BQ","BK","BB","BN","BR"],
                     ["BP","BP","BP","BP","BP","BP","BP","BP"],
                     [ "" ,""  , "" ,""  ,""  ,""  ,""  ,""  ],
                     [ "" ,""  , "" ,""  ,""  ,""  ,""  ,""  ],
                     [ "" ,""  , "" ,""  ,""  ,""  ,""  ,""  ],
                     [ "" ,""  , "" ,""  ,""  ,""  ,""  ,""  ],
                     ["WP","WP","WP","WP","WP","WP","WP","WP"],
                     ["WR","WN","WB","WQ","WK","WB","WN","WR"]]
let boardClick = false;
let pieceClick = false;
let selectedPiece = [0,0,"a",""];


rows = 8;
columns = 8;  

let Letters=['a','b','c','d','e','f','g','h'];

const rowList=document.querySelectorAll('.row');//refactor to append rows to board
const squareList = document.querySelectorAll('.square');
//rowList = addRows(rows)//builds the html board
let count = 0;
for (let i =0; i< rows; i++){
    const squareList = rowList[i].children;
    rowList[i].setAttribute('id', `${Letters[i]}`);
    for (let k = 0; k< columns; k++){
        
        squareList[k].setAttribute('id', `${Letters[i]}${k+1}`);
        squareClickListener.push(document.getElementById(`${Letters[i]}${k+1}`));
        squareClickListener[count].addEventListener('click',clickListener);
        squareClickListener[count].addEventListener('mouseout', mouseOutListener)
        squareClickListener[count].textContent=boardState[i][k];
        //squareList[k]=addSquare()
        count++;

    }// having trouble making this work  
}


function clickListener(evt){
    evt.preventDefault();

    //psuedo code, on click get the square
    let square = evt.target;
    let boardId= square.id.split('');

    //turn the square id into row and column indices
    let rowIndex = +boardId[0].charCodeAt(0)- +'a'.charCodeAt(0);//convert letter code into index
    let colIndex = +boardId[1].charCodeAt(0)- +'1'.charCodeAt(0);//convert number code into index
    let rowId = boardId[0];
    console.log(rowIndex + " " +colIndex);

    //if you click on an empty square 
    if (!square.className.includes(", selected")){
        square.className=square.className + ", selected";
        square.children.className=square.children.className+" , selected";
    }

    //if we've clicked on a piece previously 
    //need to add valid move checker.
    if (pieceClick){
        square.textContent = boardState[selectedPiece[0]][selectedPiece[1]]
        boardState[rowIndex][colIndex] = boardState[selectedPiece[0]][selectedPiece[1]]
        boardState[selectedPiece[0]][selectedPiece[1]]="";
        selectedPiece[3].textContent="";//move the piece
        pieceClick=false;
        boardClick=false;
        console.log(boardState)
    }
    else if (!(boardState[rowIndex][colIndex] === "")){
        pieceClick = true;
        boardClick = true;
        selectedPiece[0]=rowIndex;
        selectedPiece[1]=colIndex;
        selectedPiece[3]=square;
        selectedPiece[2]=square.textContent

    }

    //console.log(square);
    //alert(`${square}`);//Testing, worked  Able to appropriately target correct squares
    //want to change target 
    
}

function mouseOutListener(evt){
    evt.preventDefault();
    value = evt.target.className;
    let square = evt.target;
    if (value.includes(", selected")){
        square.className=square.className.replace(", selected", "");
        
    }
}

function picListener(evt){
    evt.preventDefault();
    let pic = evt.target;
    if (!pic.className.includes(", selected")){
        pic.className=pic.className + ", selected";
        console.log(pic)
    }
}

const squareLocation = document.getElementById('a5');
let pic= document.createElement('div');
pic.className=" ";
pic.style.backgroundImage="wKing.jpg"
pic.style.opacity=.5;
pic.addEventListener("click", picListener);
squareLocation.append(pic)
console.log(pic)
pic.setAttribute("style", "z-index: 2")
