
const palabras = ["HTML","ORACLE","ALURA","WELCOME","UML","JAVASCRITP"],
      posiciones = [];

let palabraDivinar, guinesBajo = "", 
    escritas = [], intentos = 0,
    palabra = "",
    styleSoporte = "border-left: 9px solid var(--blue500);";

const bottonStart = document.querySelector(".start"),
    buttonAddText = document.querySelector(".add-text"),
    buttonNewText = document.querySelector(".add button"),
    bottonNewGamer = document.querySelector(".new-gamer"),
    bottonFind = document.querySelector(".terminar"),
    campo = document.getElementById("campo"),
    menu = document.querySelector(".menu"),
    gamer = document.querySelector(".gamer"),
    soporte = document.querySelector(".soporte"),
    persona = document.querySelector(".persona"),
    cabeza = document.querySelector(".cabeza"),
    tronco = document.querySelector(".tronco"),
    brazo1 = document.querySelector(".brazo-1"),
    brazo2 = document.querySelector(".brazo-2"),
    pierna1 = document.querySelector(".pierna-1"),
    pierna2 = document.querySelector(".pierna-2"),
    guiones = document.getElementById("guiones"),
    palabrasAcertadas = document.getElementById("palabras-acertadas"),
    palabrasEscritas = document.getElementById("palabras-escritas");


String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

document.addEventListener('keydown', (event) => {
    var caracter = (event.key).toUpperCase();

    for(const i in palabraDivinar){
       // temp = palabraDivinar.indexOf(caracter);
       console.log(escritas.includes(caracter));
       if(caracter == "CAPSLOCK" ||
          caracter == "SHIFT" || 
          caracter == "ENTER" ||
          caracter == "BACKSPACE"){
        continue;
       }

        if( caracter == palabraDivinar[i]){
            guinesBajo = guinesBajo.replaceAt(i*2,caracter);  
        }

        if(!escritas.includes(caracter)){
            escritas.push(caracter);
        }
    }

    if(palabraDivinar == guinesBajo.replace(/ /g,'')){
        alert("Ganaste");
        restart();
        start();
    }
    if( !palabraDivinar.includes(caracter) && caracter != "ENTER" && caracter != "BACKSPACE"){
        intentos++;
        mostrarHorcado();
    }
    console.log(guinesBajo);
    guiones.innerHTML = guinesBajo;
    palabrasEscritas.innerHTML = escritas;
}, false);

function mostrarHorcado(){

    if(intentos == 1){
        soporte.setAttribute("style",styleSoporte);
    }else if( intentos == 2){
        styleSoporte += "border-top: 7px solid var(--blue500);";
        soporte.setAttribute("style",styleSoporte);
    }else if( intentos == 3){
        persona.setAttribute("style","display:flex");
    }else if( intentos == 4){
        cabeza.setAttribute("style","display:block");
    }else if(intentos == 5){
        tronco.setAttribute("style","display:block");
    }else if(intentos == 6){
        brazo1.setAttribute("style","display:block");
    }else if(intentos == 7){
        pierna1.setAttribute("style","display:block");
    }else if(intentos == 8){
        brazo2.setAttribute("style","display:block");
    }else if(intentos == 9){
        pierna2.setAttribute("style","display:block");
        alert("Perdiste");
        start();
    }
}

function restart(){
    intentos = 0;
    guinesBajo = "";
    escritas = [];
    styleSoporte = "border-left: 9px solid var(--blue500);";
    soporte.setAttribute("style","border: none");
    persona.setAttribute("style","display:none");
    cabeza.setAttribute("style","display:none");
    tronco.setAttribute("style","display:none");
    brazo1.setAttribute("style","display:none");
    pierna1.setAttribute("style","display:none");
    brazo2.setAttribute("style","display:none");
    pierna2.setAttribute("style","display:none");
}

function start(){
    restart();
    
    menu.setAttribute("style","display:none");
    gamer.setAttribute("style","display:flex");
    palabraDivinar = palabras[Math.floor(Math.random()*palabras.length)];

    for(let i = 0; i < palabraDivinar.length; i++){
        guinesBajo += "_ ";
    }
    guiones.innerHTML = guinesBajo;
    console.log(palabraDivinar);
}

function terminar(){
    restart();
    menu.setAttribute("style","display:block");
    gamer.setAttribute("style","display:none");
    guinesBajo = "";
    guiones.innerHTML = guinesBajo;

}

function mostrarAddText(){
    let etiqueta = document.querySelector(".add");
    etiqueta.setAttribute("style","display:block");
}

function addText(){
    text = document.querySelector(".add input").value;

    if(text != ""){
        palabras.push(text.toUpperCase());
        alert("Palabra guarda con exito");
        document.querySelector(".add").setAttribute("style","display:none");
        return;
    }
    alert("Por favor escriba la palabra");
}

bottonStart.onclick = start;
bottonNewGamer.onclick = start;
bottonFind.onclick = terminar;
buttonNewText.onclick = addText;
buttonAddText.onclick = mostrarAddText;

 