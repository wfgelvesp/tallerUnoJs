/**
 * Guardar los siguientes datos del usuario
 * Nombre:
 * Apellido:
 * Edad:
 * Telefono:
 * Celular:
 * Dirección:
 * y hacer que se guarden en local storage y aparezcan de nuevo cada que la página se refresque
 */
const infoUser = document.getElementById("infoUser");
const btnUno = document.getElementById("btnUno");

//Funcion
const cargarInfo = () => {
  //Ingresa informacion
  let nombre = prompt("Ingrese Nombre: ");
  let apellido = prompt("Ingrese apellido");
  let edad = prompt("Ingrse la edad");
  let telefono = prompt("Ingrese el telefono");
  let celular = prompt("ingrese celular");
  let direccion = prompt("Ingrese la direccion");
  //Condicion de campos nulos
  console.log("" + nombre);
  if (nombre == null ||nombre == "" ||apellido == null ||apellido == "" ||edad == null ||edad == "" ||telefono == null ||telefono == "" ||celular == null ||celular == "" ||direccion == null ||direccion == "") {
    return alert("Error al ingresar informacion");
  }

  //Mostrar info en la pagina
  infoUser.innerHTML =
    "Informacion del usuario \n Nombre: " +
    nombre +
    " Apellido: " +
    apellido +
    " Edad: " +
    edad +
    " telefono: " +
    telefono +
    " celular: " +
    celular +
    " direccion: " +
    direccion;

  //Guardar variables en el LocalStorage
  localStorage.setItem("nombre", nombre);
  localStorage.setItem("apellido", apellido);
  localStorage.setItem("edad", edad);
  localStorage.setItem("telefono", telefono);
  localStorage.setItem("celular", celular);
  localStorage.setItem("direccion", direccion);

  if (localStorage.getItem("nombre")) {
      if (localStorage.getItem("apellido")) {
          if (localStorage.getItem("edad")) {
              if (localStorage.getItem("telefono")) {
                  if (localStorage.getItem("celular")) {
                      if (localStorage.getItem("direccion")) {
                        infoUser.innerHTML ="Informacion del usuario \n" + localStorage.getItem("nombre")+localStorage.getItem("apellido")+localStorage.getItem("edad")+localStorage.getItem("telefono")+localStorage.getItem("celular")+localStorage.getItem("direccion");
                      }
                  }
              }
          }
          
      }
    
  }
  
};

btnUno.onclick = () => {
  cargarInfo();
};
