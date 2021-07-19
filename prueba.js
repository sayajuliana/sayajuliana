var filas= pedirdato(4,"filas");
var columnas= pedirdato (8,"columnas");
var tablero=tableroInicial(filas,columnas);
 
function pedirdato(cond, tipo) {
    do{
        var dato=parseInt(prompt (`Ingrese el numero de "${tipo}" que tiene el tablero, Debe ingresar un numero par y que sea mayor o igual a "${cond}`));
        if((dato%2 != 0) || (dato < cond)){
            alert("Dato Invalido!!!\nPor favor ingrese un numero par y que sea mayor o igual a "+cond);
            }        
    }
    while((dato%2 != 0) || (dato < cond));
    return dato;
}

function tableroInicial(f,c){
    var t = new Array(f);
    for (var i = 0; i < f; i++) {
       t[i] = new Array(c).fill(" ");
    }
    
    for(i=0;i<8;i++){
        t[1][(c/2)-4+i]="B-P";
        t[f-2][(c/2)-4+i]="W-P";
    }

    for(i=0;i<2;i++){
        t[0][(c/2)-4+7*i]="B-T";
        t[f-1][(c/2)-4+7*i]="W-T";
    }

    for(i=0;i<2;i++){
        t[0][(c/2)-3+5*i]="B-N";
        t[f-1][(c/2)-3+5*i]="W-N";
    }

    for(i=0;i<2;i++){
        t[0][(c/2)-2+3*i]="B-B";
        t[f-1][(c/2)-2+3*i]="W-B";
    }

    t[0][(c/2)-1]="B-Q";
    t[f-1][(c/2)-1]="W-Q";
    t[0][(c/2)]="B-K";
    t[f-1][(c/2)]="W-K";


    return(t);
}

printScreen();
function printScreen(){
    const tablero1 = document.getElementById('tablero');
    const parrafo = document.createElement('p');
    parrafo.textContent = tablero.join('\n');    
    tablero1.appendChild(parrafo);
    console.log(filas);
    console.log(columnas);
    console.log(tablero.join('\n'));
}