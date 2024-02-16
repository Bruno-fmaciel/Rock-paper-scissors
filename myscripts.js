function getComputerChoice() {
    lista = ["rock","paper","scissors"]
    randomElement = lista[Math.floor(Math.random() * lista.length)]
    return randomElement
}

function playRound(player,computer) {
    if (player === computer){
        return "That's a draw! Same choice!"
    }else if (player == "rock") {
        if (computer == "paper") {
            return "You lost! Paper beats rock!"
        } else {
            return "You win! Rock beats scissors!"
        }
    }else if (player == "paper") {
        if (computer == "rock") {
            return "You win! Paper beats rock!"
        }
        else {
            return "You lost! Scissors beats paper!"
        }
    }else {
        if (computer == "paper") {
            return "You win! Scissor beats paper!"
        } else {
            return "You lost! Rock beats scissors!"
        }
    }
}

function playGame() {
    for (i = 0;i <= 4;i++) {
        computer = getComputerChoice();
        player = prompt("Choose! Rock, paper or scissors: ").toLowerCase().trim();
        console.log(playRound(player,computer));
    }
}

playGame()