////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    return move || getInput();
}
function getComputerMove(move) {
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    if ((playerMove === "rock") && (computerMove === "rock")) {
        winner = "tie";
    }
    else if ((playerMove === "rock") && (computerMove === "paper")) {
        winner = "computer";
    }
    else if ((playerMove === "rock") && (computerMove === "scissors")) {
        winner = "player";
    }
    else if ((playerMove === "paper") && (computerMove === "rock")) {
        winner = "player";
    }
    else if ((playerMove === "paper") && (computerMove === "paper")) {
        winner = "tie";
    }
    else if ((playerMove === "paper") && (computerMove === "scissors")) {
        winner = "computer";
    }
    else if ((playerMove === "scissors") && (computerMove === "rock")) {
        winner = "computer";
    }
    else if ((playerMove === "scissors") && (computerMove === "paper")) {
        winner = "player";
    }
    else if ((playerMove === "scissors") && (computerMove === "scissors")) {
        winner = "tie";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ((playerWins < 5) && (computerWins < 5)) {
        var winner = getWinner(getPlayerMove(), getComputerMove());
        console.log(winner);
        if (winner === "player") {
            console.log("Player wins");
            playerWins += 1;
        }
        else if (winner === "computer") {
            console.log("Computer wins");
            computerWins += 1;
        }
    }
    return [playerWins, computerWins];
}

