const listaDeCanciones = [
    {titulo:"Dracula's Castle", src:"Dracula's Castle (Arranged by Akira Yamaoka).mp3"},
    {titulo:"Dance of illusion", src:"Dance of Illusions.mp3"},
    {titulo:"Marble Gallery", src:"Marble Gallery.mp3"}
];
let indiceActual = 0;
const reproductor = document.querySelector(".mi-reproductor");
const tituloElemento = document.querySelector(".titulo-cancion");
const btnPlayPause = document.querySelector(".btn-play-pause");
const btnSiguiente = document.querySelector(".btn-siguiente");
const btnAnterior = document.querySelector(".btn-anterior");

let cargaCancion = function(){
    const nuevoIndice = (indiceActual+1)% listaDeCanciones.length;
    indiceActual = nuevoIndice;
    reproductor.src = listaDeCanciones[nuevoIndice].src;
    tituloElemento.textContent = listaDeCanciones[indiceActual].titulo;
    console.log(`Ahora suena: ${listaDeCanciones[nuevoIndice].titulo}`);
}
let cancionAnterior = function(){
    const indiceAnterior = (indiceActual - 1 + listaDeCanciones.length)% listaDeCanciones.length;
       indiceActual = indiceAnterior;
    reproductor.src = listaDeCanciones[indiceActual].src;
    tituloElemento.textContent = listaDeCanciones[indiceActual].titulo;
    console.log(`Ahora suena: ${listaDeCanciones[indiceActual].titulo}`); 
    reproductor.play();
    btnPlayPause.textContent = "Pause" 
}
let siguienteCancion = function(){
    cargaCancion();
    reproductor.play();
    btnPlayPause.textContent = "Pause"
};
let togglePlayPause = function(){
    if (reproductor.paused === true){
        reproductor.play();
        btnPlayPause.textContent = "Pause"
    }else{
    reproductor.pause();
    btnPlayPause.textContent = "Play";
    };
};
btnPlayPause.addEventListener("click", togglePlayPause);
btnSiguiente.addEventListener("click", siguienteCancion);
btnAnterior.addEventListener("click", cancionAnterior);
cargaCancion();