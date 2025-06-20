console.log("Bem-vindo ao jogo de Pedra, Papel e Tesoura!");
console.log("Esse jogo terá 5 rodadas com sistema de pontuação");
console.log("Para começar digite: playGame()");

function playGame() {
  function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
      case 0:
        return "pedra";
      case 1:
        return "papel";
      case 2:
        return "tesoura";
    }
  }

  function getHumanChoice() {
    let choice = prompt("pedra, papel ou tesoura?");
    return choice;
  }

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      console.log("Empate!");
    } else if (
      (humanChoice === "pedra" && computerChoice === "tesoura") ||
      (humanChoice === "papel" && computerChoice === "pedra") ||
      (humanChoice === "tesoura" && computerChoice === "papel")
    ) {
      console.log("você ganhou!");
      humanScore++;
    } else {
      console.log("você perdeu!");
      computerScore++;
    }
  }

  let humanChoice = getHumanChoice();
  let computerChoice = getComputerChoice();
  console.log(computerChoice);
  playRound(humanChoice, computerChoice);
}
let humanScore = 0;
let computerScore = 0;
