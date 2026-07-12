const musica = document.querySelector("#musica-fondo")
const btnCastle = document.querySelector(".btnIntro");
const sonidoLatigo = new Audio('./latigo.mp3');
btnCastle.addEventListener("click", ()=>{
    if (musica.paused){
        musica.play();
        musica.volume = 0.5;
        btnCastle.textContent = "Pause Music";
    }else{
        musica.pause();
        btnCastle.textContent = "Enter the Castle";
    } 
});
const botones = document.querySelectorAll("button");
sonidoLatigo.volume = 0.4;

botones.forEach(boton =>{
    boton.addEventListener("click",()=>{
        sonidoLatigo.pause();
        sonidoLatigo.currentTime = 0;
        sonidoLatigo.play().catch(error => console.log("Audio interact/user gesture error:",error));
    });
});
// Seleccionamos todas las tarjetas de exploración
const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(tarjeta => {
    tarjeta.addEventListener("click", () => {
        const nombreSeccion = tarjeta.querySelector("p").textContent;
        alert(`¡Te estás adentrando en la sección: ${nombreSeccion}!`);
        // Aquí podrías en el futuro abrir un modal, hacer scroll o cambiar de página
    });
});
