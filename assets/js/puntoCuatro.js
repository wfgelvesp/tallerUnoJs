let dep=["amazonas","antioquia","arauca","atlántico","bolivar","boyaca","caldas","caqueta","casanare","cauca","cesar","choco","cordoba","cundinamarca","guainia","guaviare","huila","guajira","magdalena","meta","nariño","norte de santander","putumayo","quindio","risaralda","san andres y providencia","santander","sucre","tolima","valle del cauca","vaupes","vichada"];
let cap=["Leticia","Medellin","Arauca","Barranquilla","Cartagena","Tunja","Manizales","Florencia","Yopal","Popayan","Valledupar","Quibdo","Monteria","Bogota","Inirida","San Jose del Guaviare","Neiva","Riohacha","Santa Marta","Villavicencio","Pasto","Cucuta","Mocoa","Armenia","Pereira","San Andres","Bucaramanga","Sincelejo","Ibague","Cali","Mitu","Puerto Carreño"];

let depar=prompt("Ingrese el departamento: ")
depar=depar.toLowerCase();

const buscarCap=(depa)=>{
    for(let i=0;i<dep.length;i++){
        if(depa==dep[i]) return cap[i];
    }
    return "";
}

let capi=buscarCap(depar);
if(capi=="") alert("Error al ingresar datos")

else alert(capi);

