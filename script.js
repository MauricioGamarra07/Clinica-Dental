function llamar(){
    let botonera=document.getElementById("botonera");
    botonera.classList.toggle("botonera-open");

    let menu=document.getElementById("menu");
    menu.querySelector('.menu .cerrar').classList.toggle("fa-times");
}

//Galeria
let num=4;
function adelante(){
    num ++;
    if (num>4)
    num=1;

    let img=document.getElementById('img');
        img.src="img/"+"img0"+num+".jpg";
}

function atras(){
    num --;
    if (num<1)
    num=4;

    let img=document.getElementById('img');
        img.src="img/"+"img0"+num+".jpg";
}


//Header
window.addEventListener("scroll",Mover)
function Mover(){
    let header=document.getElementById("header");
    let ypos=window.pageYOffset;
    if (ypos>300){
        header.style.background="darkblue";
    }
    else{
        header.style.background="none";
    }
}

//Botón para subir al Inicio
window.addEventListener("scroll",Subir)
function Subir(){
    let subir=document.getElementById("subir");
    let posy=window.pageYOffset;
    if (posy>100){
        subir.style.display="block";
    }
    else{
        subir.style.display="none";
    }
}