// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresDeAmigos = []

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
 }

function añadirAmigo(){
    let nuevoNombre = (document.getElementById('amigo').value);
    if (nombresDeAmigos.includes(nuevoNombre)){
        alert ('Ya se ingreso ese nombre, intenta de nuevo')
        limpiar ();
    }
    else{       
        if (nuevoNombre === ""){
            alert ('La caja está vacía, intenta de nuevo')
        } 
        else {
            nombresDeAmigos.push(nuevoNombre);
            asignarTextoElemento (`ul`, `${nombresDeAmigos}`);
            limpiar ();
            console.log(nombresDeAmigos)               
        }      
    } 
}

function sortearAmigo (){
    let numeroMaximo = nombresDeAmigos.length

    console.log (numeroMaximo)
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo);
    console.log (numeroAleatorio)

    alert (`El amigo secreto es ${nombresDeAmigos[numeroAleatorio]}`)
}


function limpiar(){
    document.getElementById('amigo').value = '';
}
