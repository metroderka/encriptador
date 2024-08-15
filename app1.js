let textoUsuario = "";
let encriptar={};
let desencriptar={};

function displayElements(elementId,displayStatus){
    let x = document.getElementById(`${elementId}`);
    x.style.display = `${displayStatus}`;
}

function inicializarTabla(){

displayElements("desencr-txt-area","none"); //none
displayElements("desencr-txt-area_copiar","none"); //none

encriptar['e'] = 'enter';
encriptar['i'] = 'imes';
encriptar['a'] = 'ai';
encriptar['o'] = 'ober';
encriptar['u'] = 'ufat';

desencriptar['enter']='e';
desencriptar['imes']='i';
desencriptar['ai']='a';
desencriptar['ober']='o';
desencriptar['ufat']='u';

}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function capturarValorDeId(Id){
    return document.getElementById(`${Id}`).value; 
}
function soloMinusculas(texto){
    return (/^[a-z]+$/.test(texto.replace(/\s/g, "")));
}

function encriptarTexto(){
    textoUsuario = capturarValorDeId("textousuario");
    if(!textoUsuario) { }
    let textoEncriptado = "";

    if (soloMinusculas(textoUsuario)) {
        for(i=0;i< textoUsuario.length;i++){
            let a = textoUsuario[i];
            if (a in encriptar) 
                {a = encriptar[a]};
            textoEncriptado = textoEncriptado + a;
        }
        displayElements("verObjeto1","none");
        displayElements("texto1_1","none");
        displayElements("texto1_2","none");
        displayElements("texto2_1","none");
        displayElements("texto2_2","none");

        displayElements("desencr-txt-area","block");
        displayElements("desencr-txt-area_copiar","block");

        let x=document.getElementById('desencr-txt-area') ;
        x.value = textoEncriptado;


    } else {
        alert("Ingrese solamente minúsculas , sin acentos.");
    }
}
function desencriptarTexto(){
     
    textoUsuario = capturarValorDeId("textousuario");
    if (soloMinusculas(textoUsuario)) {
        for(key in desencriptar){
            let r = `${key}`
            textoUsuario = textoUsuario.replaceAll(r,desencriptar[r]);
        }
        displayElements("verObjeto1","none");
        displayElements("texto1_1","none");
        displayElements("texto1_2","none");
        displayElements("texto2_1","none");
        displayElements("texto2_2","none");
        displayElements("desencr-txt-area","block");
        displayElements("desencr-txt-area_copiar","block");

        let x=document.getElementById('desencr-txt-area') ;
        x.value = textoUsuario;

      /*  alert(textoUsuario); */
    } else {           
       /* inicializarTabla(); */
        alert("Ingrese solamente minúsculas , sin acentos.");
    }    
}
function copiarTexto(){
    let x = document.getElementById('desencr-txt-area');
    x.select();
    navigator.clipboard.writeText(x.value);
}

inicializarTabla();
