// alert("Hola este es mi Javascript");

//let nombre = "Jasson";
//var nombre1 = "Jasson";
//const nombre2 = "Jasson";

//console.log(nombre)
//console.log(nombre1)
//console.log(nombre2)

/////SELECCIONAR ELEMENTO

/*let contenidotitulo = "Nombre";

let titulo = document.querySelector(".web");
titulo.innerHTML = contenidotitulo; /

//CONDICIONALES

/*let textotitulo = contenidotitulo;
console.log(textotitulo);

 if (textotitulo == "Nombre") {
   titulo.innerHTML="otro"
}

let contenido = document.querySelector(".sobre")

if (textotitulo == "Nombre"){
   contenido.innerHTML = "sobre yo"
} else (console.log("no cumple"))/

//FUNCIONES

/*let nombre = "salome";
let pais = "mexico";
let ciudad = "ciudad de mexico";

let parrafo = document.querySelector(".parrafo1");

function cambiartexto(nombre, pais, ciudad){
   let contenid = `Me llamo ${nombre}, nací en ${pais} y vivo en ${ciudad}. Me gusta estar con mi familia y me gusta aprender. Me encantaría promover el emprendimiento de muchas personas por medio de la programación.`;
   return contenid;
}
parrafo.innerText = cambiartexto(nombre, pais, ciudad);
                

let dueño = nombre;

let sobre = document.querySelector(".sobre")

function cambiartexto(dueño){
    let comienzo =  `Acerca de ${dueño}`;
    return comienzo;
}
sobre.innerText = cambiartexto(dueño)*/

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
}

if (!valido) {
    parrafo.innerHTML = warnings;
} else {
    parrafo.innerHTML = "Enviado";
}
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});
