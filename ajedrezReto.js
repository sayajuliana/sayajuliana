const table= document.querySelector('#table1');
const numberColumns = document.getElementById('txt-columns');
const numberRow = document.getElementById('txt-row');
const btnCreate = document.getElementById('btn-create');

//Dibujar el tablero
function paintTable() {
    const column = Number(numberColumns.value);
    if((column%2 != 0) || (column < 8)){
        alert("Dato Invalido!!!\nPor favor ingrese un numero par y que sea mayor o igual a 8");
        return;
        }

    const row = Number(numberRow.value);
    if((row%2 != 0) || (row< 4)){
        alert("Dato Invalido!!!\nPor favor ingrese un numero par y que sea mayor o igual a 4");
        return;
        }

    let arrDrawers2 = initialBoard(row, column);

    console.log(column);
    console.log(row);
    console.log(arrDrawers2);

    let arrDrawers = new Array (row);
    for (let index = 0; index < row; index++) {
        arrDrawers[index]=new Array (column);        
    }

    //Pintar el tablero
    table.style.width = 50 *column + 'px'; 
    table.style.height = 50 *row + 'px';


    for (let i = 0; i < row; i++) {
        const row = document.createElement('div'); 
        row.classList.add('row');
        table.appendChild (row);

        for (let j = 0; j < column; j++){
            const col = document.createElement('div');
            col.classList.add('cell');
            row.appendChild(col);
            arrDrawers[i][j]=col;
            if ((i+j)%2 != 0){
                col.style.backgroundColor = '#01444d';
            } else {
                col.style.background = '#d7f6fa'
            }
            arrDrawers[i][j].innerHTML= changeToFigures(arrDrawers2[i][j]);
            arrDrawers[i][j].addEventListener("click", function ( ) {
               moves (arrDrawers, arrDrawers2, i, j);
            })
        }
        
    }
    console.log(row);
    console.log(arrDrawers);
}

function initialBoard (f,c){

    let t = new Array(f);
    console.log (f);
    
    for (let i = 0; i < f; i++) {
       t[i] = new Array(c).fill(" ");
    }
    
    for(i=0;i<8;i++){
        t[1][(c/2)-4+i]= "B-P";
        t[f-2][(c/2)-4+i]= "W-P";
    }

    for(i=0;i<2;i++){
        t[0][(c/2)-4+7*i]= "B-T";
        t[f-1][(c/2)-4+7*i]= "W-T";
    }

    for(i=0;i<2;i++){
        t[0][(c/2)-3+5*i]= "B-N";
        t[f-1][(c/2)-3+5*i]= "W-N";
    }

    for(i=0;i<2;i++){
        t[0][(c/2)-2+3*i]= "B-B";
        t[f-1][(c/2)-2+3*i]= "W-B";
    }

    t[0][(c/2)-1]= "B-K";
    t[f-1][(c/2)-1]= "W-K";
    t[0][(c/2)]= "B-Q";
    t[f-1][(c/2)]= "W-Q";

    return (t);
     
}
//Dibujar fichas en el tablero
function changeToFigures(array){
    switch (array) {
        case 'B-P': case 'W-P': if(array == 'B-P'){return'♟'} return '♙'
        case 'B-T': case 'W-T': if(array == 'B-T'){return'♜'} return '♖'
        case 'B-N': case 'W-N': if(array == 'B-N'){return'♞'} return '♘'
        case 'B-B': case 'W-B': if(array == 'B-B'){return'♝'} return '♗'
        case 'B-K': case 'W-K': if(array == 'B-K'){return'♛'} return '♕'
        case 'B-Q': case 'W-Q': if(array == 'B-Q'){return'♚'} return '♔'
        default:return ' '
    }
}

//Seleccionar fichas 
let selectPieces = {row: 0, col:0, piece:0}


function moves(arrDrawers, pieces, i, j) {
    if((pieces[i][j].split(" ").join("").length > 0) && (selectPieces["piece"]== 0)){
        
        selectPieces["row"] = i;
        selectPieces["col"] = j; 
        selectPieces["piece"] = pieces[i][j];
        arrDrawers[i][j].style.backgroundColor = "#af87e6"; 

        console.log (selectPieces);
        
    }

    if (arrDrawers[selectPieces["row"]][selectPieces["col"]].style.backgroundColor == "#af87e6"){
       if (pieces[i][j].split(" ").join("").length == 0){
           
            arrDrawers[selectPieces["row"]][selectPieces["col"]].innerHTML = " ";
            arrDrawers2[selectPieces["row"]][selectPieces["col"]]  = " ";
            arrDrawers2[i][j] = selectPieces["piece"];  
            arrDrawers[i][j].innerHTML = changeToFigures(selectPieces["piece"]);
       }
      
    }
}
