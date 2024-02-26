playerScore = 0;
computerScore = 0;

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
            computerScore++
            return "You lost! Paper beats rock!"
        } else {
            playerScore++
            return "You win! Rock beats scissors!"
        }
    }else if (player == "paper") {
        if (computer == "rock") {
            playerScore++
            return "You win! Paper beats rock!"
        }
        else {
            computerScore++
            return "You lost! Scissors beats paper!"
        }
    }else {
        if (computer == "paper") {
            playerScore++
            return "You win! Scissor beats paper!"
        } else {
            computerScore++
            return "You lost! Rock beats scissors!"
        }
    }
}


//DOM methods

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const result = document.querySelector('.results');


rock.addEventListener('click', function(e) {
    result.textContent = playRound('rock',getComputerChoice()) + ' ' + `Computer = ${computerScore}\nPlayer = ${playerScore}`;
    if (computerScore == 5 && playerScore < 5 || playerScore == 5 && computerScore < 5) {
        alert(`Game finished! Final score: Computer made ${computerScore} points and Player made ${playerScore} points!`);
        alert('Feel free to keep playing if you want.')
        computerScore = 0;
        playerScore = 0;
        result.textContent = playRound('rock',getComputerChoice()) + ' ' + `Computer = ${computerScore}\nPlayer = ${playerScore}`;
    };
});
paper.addEventListener('click', function(e) {
    result.textContent = playRound('paper',getComputerChoice())+ ' ' + `Computer = ${computerScore}\nPlayer = ${playerScore}`;
    if (computerScore == 5 && playerScore < 5 || playerScore == 5 && computerScore < 5) {
        alert(`Game finished! Final score: Computer made ${computerScore} points and Player made ${playerScore} points!`);
        alert('Feel free to keep playing if you want.')
        computerScore = 0;
        playerScore = 0;
        result.textContent = playRound('rock',getComputerChoice()) + ' ' + `Computer = ${computerScore}\nPlayer = ${playerScore}`;
    };
});
scissors.addEventListener('click', function(e) {
    result.textContent = playRound('scissors',getComputerChoice())+ ' ' + `Computer = ${computerScore}\nPlayer = ${playerScore}`;
    if (computerScore == 5 && playerScore < 5 || playerScore == 5 && computerScore < 5) {
        alert(`Game finished! Final score: Computer made ${computerScore} points and Player made ${playerScore} points!`);
        alert('Feel free to keep playing if you want.')
        computerScore = 0;
        playerScore = 0;
        result.textContent = playRound('rock',getComputerChoice()) + ' ' + `Computer = ${computerScore}\nPlayer = ${playerScore}`;
    };
});


