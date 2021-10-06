var filas = pedirdato (4,"filas");
var columnas = pedirdato (8,"columnas");
var tableros = tableroInicial(filas,columnas);
let canvas = document.getElementById('canvas');
tablero = canvas.getContext('2d');
 
const TABLERO = [];

const LETRAS = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];

let listLetras = [];

function pedirdato(cond,tipo) {
    do{
        var dato = parseInt(prompt ("Ingrese el numero de "+tipo+" que tiene el tablero\nDebe ingresar un numero par y que sea mayor o igual a "+cond));
        if((dato%2 != 0) ||(dato < cond)){
            alert("Dato Invalido!!!\nPor favor ingrese un numero par y que sea mayor o igual a "+cond);
            }        
    }
    while((dato%2 != 0) || (dato < cond));
    return dato;
}

function tableroInicial(f,c){
    let t = new Array(f);
    for (let i = 0; i < f; i++) {
       t[i] = new Array(c).fill("11111");
    }
    
    for(i=0;i<8;i++){
        t[1][(c/2)-4+i]= "&#9823";
        t[f-2][(c/2)-4+i]= "&#9817";
    }

    for(i=0;i<2;i++){
        t[0][(c/2)-4+7*i]= "&#9820";
        t[f-1][(c/2)-4+7*i]= "&#9814";
    }

    for(i=0;i<2;i++){
        t[0][(c/2)-3+5*i]= "&#9822";
        t[f-1][(c/2)-3+5*i]= "&#9816";
    }

    for(i=0;i<2;i++){
        t[0][(c/2)-2+3*i]= "&#9821";
        t[f-1][(c/2)-2+3*i]= "&#9815";
    }

    t[0][(c/2)-1]= "&#9819";
    t[f-1][(c/2)-1]= "&#9813";
    t[0][(c/2)]= "&#9818";
    t[f-1][(c/2)]= "&#9812";


    return(t);
}



console.log(filas);
console.log(columnas);
console.log(tableros.join('\n'));

console.log(`[${listLetras}]`);
for(index in TABLERO){
    console.log(`[${TABLERO[index]}] ${1 + parseInt(index)}`);
}



//--------> TAMAÑO DEL TABLERO <--------//
let ancho = 50*columnas;
let alto = 50*filas;

canvas.width = ancho;
canvas.height = alto;

//-------------------------------------//

//--------> DIBUJAR CUADRADOS <--------//

for(let i = 0; i < columnas; i++){
    for(let j = 0; j < filas; j++){
        if((i + j) % 2 == 0){
            cuadradosTablero(50*j, 50*i, 50*(j+1), 50*(i+1), '#bcecf7');
        }else{
            cuadradosTablero(50*j, 50*i, 50*(j+1), 50*(i+1), '#075061');
        }
    
    }
}

function cuadradosTablero(ix,iy,fx,fy, color){
    tablero.beginPath();
    tablero.rect(ix, iy, fx, fy);
    tablero.fillStyle = color;
    tablero.fill();
    tablero.closePath();
}
   


/*function printScreen(){
    const tablero1 = document.getElementById("tablero");
    const filas1 = document.createElement("p"); 
    filas1.textContent = filas; 
    tablero1.appendChild(filas1); 
    console.log(filas);  
}

printScreen(); */