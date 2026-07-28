const gameBoard = (function(){
    const tablero = ["", "", "", "", "", "", "", "", ""];
    const getTablero = function(){
        return tablero;
    };
    const marcaCasilla = function(indice, simbolo){
        if (tablero[indice]=== ""){
            tablero[indice] = simbolo;
            return true;
        }
        return false;
    }
    const reiniciarTablero = function(){
        for(let i=0; i<tablero.length;i++){
            tablero[i] = "";
        }
    };
    return{
        getTablero,
        marcaCasilla,
        reiniciarTablero
    };
})();

const crearJugador = function(nombre, simbolo){
    return {
        nombre,
        simbolo
    };
};
const user = crearJugador("User", "X");
const computadora = crearJugador("Computadora", "O");
let juegoTerminado = false;
const gameController = (function(){
    const jugadores = [user,computadora];
    let jugadorActivoIndex = 0;
    const jugadaComputadora = function(){
        const tableroActual = gameBoard.getTablero();
        let casillasVacias = [];
        tableroActual.forEach((casilla, indice)=>{
            if(casilla === "") casillasVacias.push(indice);
        });
        const indiceAzar = casillasVacias[Math.floor(Math.random()* casillasVacias.length)];
        if(indiceAzar !== undefined){
            playRound(indiceAzar);
        }
    };
    const getJugadorActivo = function(){
        return jugadores[jugadorActivoIndex];
    };
    const cambiarTurno = function(){
        jugadorActivoIndex = jugadorActivoIndex === 0 ? 1 : 0;
    };
    const checkGanador = function(){
        const tableroActual = gameBoard.getTablero();
        const combinacionesGanadoras = [
  [0, 1, 2], // (Fila superior)
  [3, 4, 5], // Fila central
  [6, 7, 8], // Fila inferior
  [0, 3, 6], // Columna izquierda
  [1, 4, 7], // Columna central
  [2, 5, 8], // Columna derecha
  [0, 4, 8], // Diagonal principal
  [2, 4, 6]  // Diagonal secundaria
];;
        for(let i = 0; i < combinacionesGanadoras.length; i++){
            const [a,b,c] = combinacionesGanadoras[i];
            if (tableroActual[a] !== "" &&
            tableroActual[a] === tableroActual[b] &&
            tableroActual[b] === tableroActual[c]){
                return true;
            }
        }return false;
    };
    const playRound = function(indice){
        if(juegoTerminado) return;
        const jugadorActivo = getJugadorActivo();
        const jugadaExitosa = gameBoard.marcaCasilla(indice, jugadorActivo.simbolo);
        if (jugadaExitosa){
            console.log(`¡${jugadorActivo.nombre} jugó en la casilla ${indice}!`) 

            if (checkGanador()){
                juegoTerminado = true;
                displayController.mostrarResultado(`¡Felicidades!¡${jugadorActivo.nombre} ganó la partida!`)
                return;
            }
            const tableroActual = gameBoard.getTablero();
            if(!tableroActual.includes("")){
                juegoTerminado = true;
                displayController.mostrarResultado("¡Es un empate! Nadie gana esta vez")
                return;
            }
            cambiarTurno();
            if(getJugadorActivo().nombre === "Computadora" && !juegoTerminado){
                setTimeout(()=>{
                    jugadaComputadora();
                    displayController.renderTablero();
                },500);
            }
        }else{
            console.log("Esa Casilla ya está ocupada, ¡intenta otra!");
        }
    };
    const reiniciarJuego = function(){
        gameBoard.reiniciarTablero();
        jugadorActivoIndex = 0;
        juegoTerminado = false;
    };
    return {
        getJugadorActivo,
        cambiarTurno,
        playRound,
        reiniciarJuego
    };
})();

const displayController = (function(){
    const contenedorTablero = document.querySelector(".contenedor-tablero");
    const mensajeResultado = document.querySelector(".mensaje-resultado");
    const renderTablero = function(){
        contenedorTablero.innerHTML = "";
        const tablero = gameBoard.getTablero();
        tablero.forEach((casilla,indice)=>{
            const cuadradito = document.createElement("div");
            cuadradito.classList.add("casillero");
            cuadradito.dataset.index = indice;
            cuadradito.textContent = casilla;
            contenedorTablero.appendChild(cuadradito);
        });
    };
    const mostrarResultado = function(mensaje){
        mensajeResultado.textContent = mensaje;
    };
    contenedorTablero.addEventListener("click", (evento)=>{
        if(evento.target.classList.contains("casillero")){
            const indiceElegido = evento.target.dataset.index;
            gameController.playRound(Number(indiceElegido));
            renderTablero();
        }
    });
    return{
        renderTablero,
        mostrarResultado
    };
})();

displayController.renderTablero();
const btnReiniciar = document.querySelector(".btn-reiniciar");
btnReiniciar.addEventListener("click", ()=>{
    gameController.reiniciarJuego();
    displayController.mostrarResultado("");
    displayController.renderTablero();
});