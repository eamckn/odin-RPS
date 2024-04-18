// ROCK PAPER SCISSORS

let playerWins = 0;
let computerWins = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const score = document.querySelector("#score");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const roundMessage = document.querySelector("#round-message");
const declareWinner = document.querySelector("#winner");

playerScore.textContent = `PLAYER SCORE: ${playerWins}`;
computerScore.textContent = `COMPUTER SCORE: ${computerWins}`;

const choicesMenu = document.querySelector("#choices");

let makeChoice = function(event) {
    let target = event.target;

            switch(target.id) {
                case "rock":
                    playRound("rock", getComputerChoice());
                    playerScore.textContent = `PLAYER SCORE: ${playerWins}`;
                    computerScore.textContent = `COMPUTER SCORE: ${computerWins}`;
                    checkWinner();
                    break;
                case "paper":
                    playRound("paper", getComputerChoice())
                    playerScore.textContent = `PLAYER SCORE: ${playerWins}`;
                    computerScore.textContent = `COMPUTER SCORE: ${computerWins}`;
                    checkWinner();
                    break;
                case "scissors":
                    playRound("scissors", getComputerChoice())
                    playerScore.textContent = `PLAYER SCORE: ${playerWins}`;
                    computerScore.textContent = `COMPUTER SCORE: ${computerWins}`;
                    checkWinner();
                    break;
            }
}

choicesMenu.addEventListener('click', makeChoice)

// Play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // All possible matchups
    if (playerSelection === computerSelection) {
        roundMessage.textContent = `It's a tie! You and the computer both selected ${playerSelection}.`;
    }
    // ALL PLAYER WIN SCENARIOS
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerWins;
        roundMessage.textContent = "You win! Rock beats scissors.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerWins;
        roundMessage.textContent = "You win! Paper beats rock.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerWins;
        roundMessage.textContent = "You win! Scissors beats paper";
    }
    // ALL COMPUTER WIN SCENARIOS
    else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerWins;
        roundMessage.textContent = "You lose! Paper beats rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerWins;
        roundMessage.textContent = "You lose! Scissors beats paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerWins; 
        roundMessage.textContent = "You lose! Rock beats scissors.";
    }
}

function getComputerChoice() {
    // Create random number variable between 0 - 2
    let rockPaperScissorsNumber = Math.floor(Math.random() * 3);
    console.log(rockPaperScissorsNumber);
    // Choose game roll based on number
    switch (rockPaperScissorsNumber) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2: 
            return "scissors";
    }
}

function checkWinner() {
    if (playerWins === 5) {
        declareWinner.textContent = "CONGRATULATIONS! YOU WIN!";
        choicesMenu.removeEventListener('click', makeChoice)
    }
    else if (computerWins === 5) {
        declareWinner.textContent = "Oh no! You lost. Better luck next time!";
        choicesMenu.removeEventListener('click', makeChoice)
    }
}
