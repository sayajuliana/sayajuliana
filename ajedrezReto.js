const table= document.querySelector('#table1');
const numberColumns = document.getElementById('txt-columns');
const numberRow = document.getElementById('txt-row');
const btnCreate = document.getElementById('btn-create');


/*btnCrear.addEventListener('click',dibujarTablero);*/

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
            arrDrawers[i][j]=col.innerHTML;
            if ((i+j)%2 != 0){
                col.style.backgroundColor = '#01444d';
            } else {
                col.style.background = '#d7f6fa'
            }
            
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

    t[0][(c/2)-1]= "B-Q";
    t[f-1][(c/2)-1]= "W-Q";
    t[0][(c/2)]= "B-K";
    t[f-1][(c/2)]= "W-K";

    return (t);
     
}



