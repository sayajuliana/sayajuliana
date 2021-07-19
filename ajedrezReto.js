const tablerito = document.querySelector('#tablero');
const cantidadColumnas = document.getElementById('txt-columnas');
const cantidadFilas = document.getElementById('txt-filas');
const btnCrear = document.getElementById('btn-crear');


btnCrear.addEventListener('click',dibujarTablero);


function dibujarTablero() {
    const columnas = Number(cantidadColumnas.value);
    if((columnas%2 != 0) || (columnas < 8)){
        alert("Dato Invalido!!!\nPor favor ingrese un numero par y que sea mayor o igual a 8");
        return;
        }
    const filas = Number(cantidadFilas.value);
    if((filas%2 != 0) || (filas < 4)){
        alert("Dato Invalido!!!\nPor favor ingrese un numero par y que sea mayor o igual a 4");
        return;
        }

    console.log(columnas);
    console.log(filas);

    let arrCajones = new Array (filas);
    for (let index = 0; index < filas; index++) {
        arrCajones[index]=new Array (columnas);        
    }
    
    let tabla = '<tabla>'
    for (let i = 0; i < filas; i++) {
        const row = document.createElement('div'); 
        row.classList.add('fil');
        tablerito.appendChild (row);

        for (let j = 0; j < columnas; j++){
            const col = document.createElement('div');
            col.classList.add('cuadrito');
            tablerito.appendChild(col);
            arrCajones[i][j]=col.innerHTML;
        }
        
    }
    console.log(arrCajones);

}

