/*       *********** FUNCTION SETUP BOARD ******************
//Attaches id's to all the squares and rows of the board.  I realized that doing it by hand was dumb about halfway through may
//adopt this to different game types as new game variants are added.  
//To change.  In the for loops 8 may be changed to row and column width. 
//Current thinking is to have a few multi width variations,
//refactor later.  Basic functionality as of 10/12/2022 
*/
function setUpBoard( rows=8, columns=8){
    let Letters=['a','b','c','d','e','f','g','h'];
    const rowList=document.querySelectorAll('.row');//refactor to append rows to board
    //rowList = addRows(rows)//builds the html board
    for (let i =0; i< rows; i++){
        const squareList = rowList[i].children;
        rowList[i].setAttribute('id', `${Letters[i]}`);
        for (let k = 0; k< columns; k++){
            squareList[k].setAttribute('id', `${Letters[i]}${k+1}`);
            //squareList[k]=addSquare()

        }// having trouble making this work  
    }
}