// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresDeAmigos = []

function añadirAmigo(){
    let nuevoNombre = (document.getElementById('amigo').value);
    nuevoNombre = nuevoNombre.toUpperCase ();
        if (nombresDeAmigos.includes(nuevoNombre)){
        alert ('Ya se ingreso ese nombre, intenta de nuevo')
        limpiar ();
    }
    else{       
        if (nuevoNombre === ""){
            alert ('Por favor, inserte un nombre')
        } 
        else {
            nombresDeAmigos.push(nuevoNombre);  
            crearLinea();       
            limpiar ();
            console.log(nombresDeAmigos)               
        }      
    } 
}

function sortearAmigo (){

        if (nombresDeAmigos.length === 0 ){
        alert ("No hay ningun amigo en tu lista")
        }     else{
        let numeroMaximo = nombresDeAmigos.length
        console.log (numeroMaximo)
        let numeroAleatorio = Math.floor(Math.random()*numeroMaximo);
        console.log (numeroAleatorio)
        asignarTextoElemento (`resultado`, `El amigo secreto es ${nombresDeAmigos[numeroAleatorio]}`)      
        }
}

function crearLinea(){
    for (let i = 0; i < nombresDeAmigos.length; i++) {
        const elementoPadre = document.getElementById("nombresDeAmigos");
        let liElement = document.createElement(`li`);
        elementoPadre.appendChild(liElement); 
        liElement.setAttribute("id", `l${i}`)        
        asignarTextoElemento (`l${i}`, `${nombresDeAmigos[i]}`);        
    }
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarLista(){
    document.getElementById('nombresDeAmigos').value = '';
                
}

function limpiar(){
    document.getElementById('amigo').value = '';
}