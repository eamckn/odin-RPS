// ROCK PAPER SCISSORS

let playerWins = 0;
let computerWins = 0;

const gameChoiceList = document.querySelector("#choices");

const playerScoreDisplay = document.querySelector("#player-score");
playerScoreDisplay.textContent = `PLAYER SCORE: ${playerWins}`;

const computerScoreDisplay = document.querySelector("#computer-score");
computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerWins}`;

const playerPickDisplay = document.querySelector("#player-pick");
const computerPickDisplay = document.querySelector("#computer-pick");
const roundResult = document.querySelector("#round-result");
const winner = document.querySelector("#winner");

let makeChoice = function(event) {

    let target = event.target;

            switch(target.id) {
                case "rock":
                    playRound("rock", getComputerChoice());
                    playerScoreDisplay.textContent = `PLAYER SCORE: ${playerWins}`;
                    computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerWins}`;
                    checkWinner();
                    break;
                case "paper":
                    playRound("paper", getComputerChoice())
                    playerScoreDisplay.textContent = `PLAYER SCORE: ${playerWins}`;
                    computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerWins}`;
                    checkWinner();
                    break;
                case "scissors":
                    playRound("scissors", getComputerChoice())
                    playerScoreDisplay.textContent = `PLAYER SCORE: ${playerWins}`;
                    computerScoreDisplay.textContent = `COMPUTER SCORE: ${computerWins}`;
                    checkWinner();
                    break;
            }
}

gameChoiceList.addEventListener('click', makeChoice)

// Play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // All possible matchups
    if (playerSelection === computerSelection) {
        playerPickDisplay.textContent = `You selected: ${playerSelection}.`;
        computerPickDisplay.textContent = `The computer selected: ${computerSelection}.`;
        roundResult.textContent = `It's a tie! You and the computer both selected ${playerSelection}.`;
    }
    // ALL PLAYER WIN SCENARIOS
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerWins;
        playerPickDisplay.textContent = `You selected: ${playerSelection}.`;
        computerPickDisplay.textContent = `The computer selected: ${computerSelection}.`;
        roundResult.textContent = "You win! Rock beats scissors.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerWins;
        playerPickDisplay.textContent = `You selected: ${playerSelection}.`;
        computerPickDisplay.textContent = `The computer selected: ${computerSelection}.`;
        roundResult.textContent = "You win! Paper beats rock.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerWins;
        playerPickDisplay.textContent = `You selected: ${playerSelection}.`;
        computerPickDisplay.textContent = `The computer selected: ${computerSelection}.`;
        roundResult.textContent = "You win! Scissors beats paper";
    }
    // ALL COMPUTER WIN SCENARIOS
    else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerWins;
        playerPickDisplay.textContent = `You selected: ${playerSelection}.`;
        computerPickDisplay.textContent = `The computer selected: ${computerSelection}.`;
        roundResult.textContent = "You lose! Paper beats rock.";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerWins;
        playerPickDisplay.textContent = `You selected: ${playerSelection}.`;
        computerPickDisplay.textContent = `The computer selected: ${computerSelection}.`;
        roundResult.textContent = "You lose! Scissors beats paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        ++computerWins; 
        playerPickDisplay.textContent = `You selected: ${playerSelection}.`;
        computerPickDisplay.textContent = `The computer selected: ${computerSelection}.`;
        roundResult.textContent = "You lose! Rock beats scissors.";
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
        winner.textContent = "CONGRATULATIONS! YOU WIN!";
        gameChoiceList.removeEventListener('click', makeChoice)
    }
    else if (computerWins === 5) {
        winner.textContent = "Oh no! You lost. Better luck next time!";
        gameChoiceList.removeEventListener('click', makeChoice)
    }
}
