let humanScore = 0
let computerScore = 0
let getComputerChoice = () => {
   const compuChoice = ["piedra", "papel", "tijera"];
   const randomIndex = Math.floor(Math.random()*3);
   return compuChoice[randomIndex];
}
let getHumanChoice = ()=> {
    const humanChoice = prompt("Elige Piedra, Papel o Tijera").toLowerCase();
    return humanChoice;
}
let playRound = (humanChoice, compuChoice) => {
    if (humanChoice === compuChoice){
    console.log("Es un empate");
    } 
    else if (humanChoice === "piedra" && compuChoice=== "tijera") { console.log("Humano gana");
        humanScore++;
    }
    else if (humanChoice === "tijera" && compuChoice === "papel"){ console.log("Humano gana");
        humanScore++;
    }
    else if (humanChoice === "papel" && compuChoice === "piedra"){ console.log("Humano Gana");
        humanScore++;
    }
    else {
        console.log("Computadora gana");
        computerScore++;
    }
}
const playGame = () => {
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const compuSelection = getComputerChoice();
        playRound(humanSelection, compuSelection);
    }
    if (humanScore > computerScore){
        console.log("Felicitaciones ganaste la partida!")
    } 
    else if (computerScore > humanScore){
        console.log("La compu gano la partida!")
    }
    else {
        console.log("La partida termino en empate!")
    }
}
playGame();