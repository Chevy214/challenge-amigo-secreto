// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombresDeAmigos = []

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
            imprimirListaEnPantalla()          
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

function imprimirListaEnPantalla(){
    for (let i = 0; i < nombresDeAmigos.length; i++) {
    const elementoPadre = document.getElementById("nombresDeAmigos");
    let liElement = document.createElement("li");
    elementoPadre.appendChild(liElement);
    liElement.textContent = nombresDeAmigos[i];          
    }
}


function limpiar(){
    document.getElementById('amigo').value = '';
}

