const musica = document.querySelector("#musica-fondo")
const btnCastle = document.querySelector(".btnIntro");
//const sonidoLatigo = new Audio('./latigo.mp3');

const listaDeCanciones = [
{titulo:"Unknown",src:"./music/(Unknown).mp3"},
{titulo:"Abandoned Pit",src:"./music/Abandoned Pit.mp3"},
{titulo:"Black Banquet",src:"./music/Black Banquet.mp3"},
{titulo:"Crystal Teardrops",src:"./music/Crystal Teardrops.mp3"},
{titulo:"Cursed Sanctuary",src:"./music/Cursed Sanctuary.mp3"},
{titulo:"Dance of Illusions",src:"./music/Dance of Illusions.mp3"},
{titulo:"Demonic Banquet",src:"./music/Demonic Banquet.mp3"},
{titulo:"Dracula's Castle",src:"./music/Dracula's Castle (Arranged by Akira Yamaoka).mp3"},
{titulo:"Gate of Holy Spirits",src:"./music/Gate of Holy Spirits.mp3"},
{titulo:"Gates of Heaven",src:"./music/Gates of Heaven.mp3"},
{titulo:"Gates of Hell",src:"./music/Gates of Hell.mp3"},
{titulo:"Golden Dance",src:"./music/Golden Dance.mp3"},
{titulo:"I am the Wind",src:"./music/I am the Wind (Vocals by Cynthia Harrell).mp3"},
{titulo:"Land of Benediction",src:"./music/Land of Benediction (Game Over).mp3"},
{titulo:"Marble Gallery",src:"./music/Marble Gallery.mp3"},
{titulo:"Master Librarian",src:"./music/Master Librarian.mp3"},
{titulo:"Nocturne",src:"./music/Nocturne.mp3"},
{titulo:"Prayer",src:"./music/Prayer.mp3"},
{titulo:"Prologue",src:"./music/Prologue.mp3"},
{titulo:"Rainbow's Cemetery",src:"./music/Rainbow's Cemetery.mp3"},
{titulo:"Requiem of the Gods",src:"./music/Requiem of the Gods.mp3"},
{titulo:"Silence",src:"./music/Silence.mp3"},
{titulo:"Strange Bloodlines",src:"./music/Strange Bloodlines.mp3"},
{titulo:"Symphony of the Night",src:"./music/Symphony of the Night.mp3"},
{titulo:"The Festival of Servants",src:"./music/The Festival of Servants.mp3"},
{titulo:"The Final Toccata",src:"./music/The Final Toccata.mp3"},
{titulo:"The Lost Portrait",src:"./music/The Lost Portrait.mp3"},
{titulo:"The Poetic Ballad of Death",src:"./music/The Poetic Ballad of Death.mp3"},
{titulo:"The Tragic Prince",src:"./music/The Tragic Prince (Arranged by Akira Yamaoka).mp3"},
{titulo:"Tower of Evil Mist",src:"./music/Tower of Evil Mist.mp3"},
{titulo:"Transformation 1",src:"./music/Transformation 1 (FMV 1).mp3"},
{titulo:"Transformation 2",src:"./music/Transformation 2 (FMV 2).mp3"},
{titulo:"Transformation 3",src:"./music/Transformation 3 (FMV 3).mp3"},
{titulo:"Waltz of the Pearls",src:"./music/Waltz of the Pearls.mp3"},
{titulo:"Wandering Ghosts",src:"./music/Wandering Ghosts.mp3"},
{titulo:"Wood-Carved Partita",src:"./music/Wood-Carved Partita.mp3"},
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
/*const botones = document.querySelectorAll("button");
sonidoLatigo.volume = 0.4;

botones.forEach(boton =>{
  boton.addEventListener("click",()=>{
    sonidoLatigo.pause();
    sonidoLatigo.currentTime = 0;
    sonidoLatigo.play().catch(error => console.log("Audio interact/user gesture error:",error));
  });
});*/
// Seleccionamos todas las tarjetas de exploración
const tarjetas = document.querySelectorAll(".card");

tarjetas.forEach(tarjeta => {
  tarjeta.addEventListener("click", () => {
    const nombreSeccion = tarjeta.querySelector("p").textContent;
    alert(`¡Te estás adentrando en la sección: ${nombreSeccion}!`);
    // Aquí podrías en el futuro abrir un modal, hacer scroll o cambiar de página
  });
});
// ===== INTERACCIÓN CON PERSONAJES =====

const characterCards = document.querySelectorAll('.character-card');

const characterInfo = {
  alucard: {
    name: 'Alucard',
    role: 'Dhampyr',
    icon: '🦇',
    description: 'El hijo de Drácula. Mitad humano, mitad vampiro. Despierta para sellar el castillo de su padre y salvar a la humanidad de la oscuridad eterna.'
  },
  richter: {
    name: 'Richter Belmont',
    role: 'Cazador Vampiro',
    icon: '⚔️',
    description: 'El último descendiente del clan Belmont. Portador del látigo vampírico. Su destino está ligado a la caída de Drácula.'
  },
  maria: {
    name: 'Maria Renard',
    role: 'Invocadora',
    icon: '🕊️',
    description: 'Una joven con el poder de invocar animales sagrados. Su conexión con Richter la lleva a adentrarse en el castillo en busca de respuestas.'
  }
};

characterCards.forEach(card => {
  const character = card.dataset.character;

  card.addEventListener('click', () => {
    const info = characterInfo[character];

    // Remover clase activa de todos
    characterCards.forEach(c => c.classList.remove('active'));

    // Agregar clase activa al seleccionado
    card.classList.add('active');

    // Mostrar información en la notificación
    showNotification(
    `${info.icon} ${info.name}: ${info.description}`,
    info.icon,
    4000
    );

    // Pequeña animación de "pulso"
    card.style.transition = 'transform 0.1s ease';
    card.style.transform = 'scale(0.92)';
    setTimeout(() => {
      card.style.transform = '';
    }, 150);
  });
});

// Efecto de brillo aleatorio en las tarjetas (opcional)
setInterval(() => {
  const randomCard = characterCards[Math.floor(Math.random() * characterCards.length)];
  randomCard.style.transition = 'box-shadow 0.5s ease';
  randomCard.style.boxShadow = '0 0 30px rgba(255, 0, 0, 0.3)';
  setTimeout(() => {
    randomCard.style.boxShadow = '';
  }, 500);
}, 5000);

// Función para mostrar notificaciones
function showNotification(message, icon = '', duration = 3000) {
  // Crear elemento de notificación
  const notification = document.createElement('div');
  notification.classList.add("notification-box");
  notification.textContent = message;
  document.body.appendChild(notification);

  // Remover después del tiempo especificado
  setTimeout(() => {
    notification.classList.add("slide-out");
    setTimeout(() => notification.remove(), 300);
  }, duration);
}
cargaCancion();