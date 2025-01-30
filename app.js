// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresDeAmigos = []

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
 }

function añadirAmigo(){
    let nuevoNombre = (document.getElementById('amigo').value);
   
    if (nuevoNombre === ""){
        alert ('La caja está vacía, intenta de nuevo')
    } 
    else {
        nombresDeAmigos.push(nuevoNombre);
        asignarTextoElemento (`ul`, `${nombresDeAmigos}`);
         
        console.log(nombresDeAmigos)
    }
}



