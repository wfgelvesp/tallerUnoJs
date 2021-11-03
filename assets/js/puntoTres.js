/**
 *  Digitar alguna de estas palabras (casa, mesa, perro, gato) luego mostrar la palabra traducida en inglés.
 *  Es decir, si se ingresa 'casa' debemos mostrar el texto 'house' en la página. (Con Switch) 
 */

let n=prompt("ingrese el item de la palabra a traducir: 1. casa 2. mesa 3. perro 4. gato ");

switch(n){
    case "1":alert("Traduccion HOUSE")
    break;
    case "2":alert("Traduccio TABLE");
    break;
    case "3":alert("Traduccion DOG");
    break;
    case "4":alert("Traduccion CAT");
    break;

}

