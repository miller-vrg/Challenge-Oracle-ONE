
function copy(){
    let resultado = document.querySelector("#text-resultado");
    resultado.select();
    document.execCommand("copy");
    alert("Texto copiado");
}

function ocultar(value){
    let etiqueta = document.querySelector(value);
    etiqueta.setAttribute("style","display:none");
}

function mostrar(value){
    let etiqueta = document.querySelector(value);
    etiqueta.setAttribute("style","display:block");
}

function encriptar(){
    ocultar("#info");
    mostrar("#boton-textarea");

    var text = document.querySelector("#entrada-user").value;
    let arreglo = text.split(""), resultado = "";
   
    for(i = 0; i < arreglo.length; i++){
        var acumula = arreglo[i];
        for(a = 0; a < 5; a++){  
            if(arreglo[i] == vocales[a]){
                acumula = codificaciones[a];
                break;
        }
        }
        resultado += acumula;
    }

    document.getElementById("text-resultado").textContent=resultado;
}

function desencriptar(){
    ocultar("#info");
    mostrar("#boton-textarea");

    const text = document.querySelector("#entrada-user").value;
    const resultado = text.replace(/ai/g,"a").
    replace(/imes/g,"i").
    replace(/ufat/g,"o").
    replace(/abor/g,"u").
    replace(/enter/g,"e");
    
    document.getElementById("text-resultado").textContent=resultado;
}

function seleccionar(){
    textEntrada.select();
}

const 
codificaciones = ["ai","imes","ufat","abor","enter"],
vocales = ["a","i","o","u","e"];

let bottonCopiar = document.querySelector("#copiar"),
 bottonEncriptar = document.querySelector("#encriptar"),
 bottonDesencriptar = document.querySelector("#desencriptar"),
 textEntrada = document.querySelector("#entrada-user");


bottonCopiar.onclick = copy;
bottonEncriptar.onclick = encriptar;
bottonDesencriptar.onclick = desencriptar;
textEntrada.onclick = seleccionar;

 