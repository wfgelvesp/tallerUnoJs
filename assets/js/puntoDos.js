/**
 *  Confeccionar un programa en JavaScript que defina e inicializa una variable de tipo cadena de caracteres donde almacenemos el nombre de un empleado y otra variable de tipo entera donde almacenar el sueldo. Imprimir cada variable en una línea distinta en pantalla. 
 */
const txtNombre=document.getElementById("txtNombre");
const intSueldo=document.getElementById("intSueldo");
const btnDos=document.getElementById("btnDos");

const aggInfo =()=>{
    let nombre="Wilmer";
    let sueldo=1000000;
    txtNombre.innerHTML="Nombre: "+nombre;
    intSueldo.innerHTML="Sueldo: "+sueldo;
}

btnDos.onclick=()=>{
    aggInfo();
}






