
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
    else {
        ++computerWins; 
        roundMessage.textContent = "You lose! Rock beats scissors.";
    }
}

function playGame() {
    let currentScore;
    let roundResults;
     // Get player choice for current round
    const playerSelection = prompt("Rock, paper, or scissors?", "").toLowerCase();        // Get  computer choice for current round
    const computerSelection = getComputerChoice();
    // Evaluate and store the round results
    roundResults = playRound(playerSelection, computerSelection);
    // If results are a tie, don't increment any score, make the loop go an additional time
    if (roundResults === "TIE") {
        console.log("It's a tie! Go again.");
    }
    else {
        currentScore = `\nPlayer score: ${playerWins}\nComputer score: ${computerWins}`;
        console.log(roundResults + currentScore);
    }
}

let playerWins = 0;
let computerWins = 0;

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

const score = document.querySelector("#score");
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const roundMessage = document.querySelector("#round-message");

playerScore.textContent = `PLAYER SCORE: ${playerWins}`;
computerScore.textContent = `COMPUTER SCORE: ${computerWins}`;


rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    playerScore.textContent = `PLAYER SCORE: ${playerWins}`;
    computerScore.textContent = `COMPUTER SCORE: ${computerWins}`;
})
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
    playerScore.textContent = `PLAYER SCORE: ${playerWins}`;
    computerScore.textContent = `COMPUTER SCORE: ${computerWins}`;
})
scissorsBtn.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
    playerScore.textContent = `PLAYER SCORE: ${playerWins}`;
    computerScore.textContent = `COMPUTER SCORE: ${computerWins}`;
})

//playGame();