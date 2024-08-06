
const textoUsuario = document.querySelector(".contenido-1-contenedor-textArea");
const mensaje = document.querySelector('.contenido-2-contenedor-textArea');
let h4 = document.querySelector(".ms1");
let h6 = document.querySelector(".ms2");


function limpiarTexto(){
    let textSalida = document.querySelector('#textoSalida');
    textSalida.value= " ";
    mensaje.style.background = "";
    h4.innerHTML = "Ningún mensaje fue encontrado"
    h6.innerHTML = "Ingresa el texto que desees encriptar o desencriptar.";
    
}

function borrarLetrero(elemento, texto){
    let letrero = document.querySelector(elemento);
    letrero.innerHTML = texto;
    
}

function btnEncriptar(){
    const textoSalida = encriptarTexto(textoUsuario.value);
    verificarCampos(textoSalida);
    
}
function verificarCampos(texto) {
    if (typeof texto === "string" && texto.length === 0) {
        
    }else{
        mensaje.value = texto;
        textoUsuario.value = "";
        mensaje.style.background = "none";
        borrarLetrero("h6","");
        borrarLetrero("h4","");
    }
}

function btnDesenncriptar(){
    const textoSalida = desencriptarTexto(textoUsuario.value);
    verificarCampos(textoSalida);
}

function encriptarTexto(stringEncriptada){
    /*La letra "e" es convertida para "enter"
    La letra "i" es convertida para "imes"
    La letra "a" es convertida para "ai"
    La letra "o" es convertida para "ober"
    La letra "u" es convertida para "ufat"*/

    let matrizLlave = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];   
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let index = 0; index < matrizLlave.length; index++) {
        if(stringEncriptada.includes(matrizLlave[index][0])){
           stringEncriptada = stringEncriptada.replaceAll(matrizLlave[index][0],matrizLlave[index][1]);
        }
        
    }
    return stringEncriptada;
}

function desencriptarTexto(stringDesencriptada){
    let matrizLlave = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];   
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let index = 0; index < matrizLlave.length; index++) {
        if(stringDesencriptada.includes(matrizLlave[index][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizLlave[index][1],matrizLlave[index][0]);
        }
        
    }
    return stringDesencriptada;
}

function btnCopiar() {
    
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensaje.value);
   

}

