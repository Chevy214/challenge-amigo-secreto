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
            alert ('La caja está vacía, intenta de nuevo')
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
    let numeroMaximo = nombresDeAmigos.length
    
    console.log (numeroMaximo)
    let numeroAleatorio = Math.floor(Math.random()*numeroMaximo);
    console.log (numeroAleatorio)

    alert (`El amigo secreto es ${nombresDeAmigos[numeroAleatorio]}`)
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


//crear un contador de cuantas veces se ha usado la funcion crear linea
//imprimir en li el "nombres de amigos [contador]"


function limpiar(){
    document.getElementById('amigo').value = '';
}

