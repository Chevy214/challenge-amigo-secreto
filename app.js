// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
var nombresDeAmigos = []
let nuevoNombre = ""
let numeroMaximo = ""
let numeroAleatorio = ""
let elementoHTML = ""


function reiniciarJuego(){
    for (let i = -1; i < (nombresDeAmigos.length+i); i++){
        nombresDeAmigos.pop ();
        }
    limpiar();
    limpiarLista();
    limpiarListaEnPantalla();
    asignarTextoElemento (`resultado`, ``)
    console.log (nombresDeAmigos)
    document.getElementById("reiniciarJuego").setAttribute('disabled', 'false');
      
}

function añadirAmigo(){
            console.log (nombresDeAmigos)
    nuevoNombre = (document.getElementById('amigo').value);
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
        numeroMaximo = nombresDeAmigos.length
        console.log (numeroMaximo)
        numeroAleatorio = Math.floor(Math.random()*numeroMaximo);
        console.log (numeroAleatorio)
        asignarTextoElemento (`resultado`, `El amigo secreto es: ${nombresDeAmigos[numeroAleatorio]}`)  
        limpiarListaEnPantalla();   
        document.getElementById("reiniciarJuego").removeAttribute('disabled')  
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

function limpiarListaEnPantalla() {
    for (let i = 0; i < nombresDeAmigos.length; i++) {
        asignarTextoElemento (`l${i}`, '');        
    }
}

function asignarTextoElemento(elemento, texto){
    elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarLista(){
    document.getElementById('nombresDeAmigos').value = '';
                
}

function limpiar(){
    document.getElementById('amigo').value = '';
}