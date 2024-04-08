
// write function that gets a choice for the computer
function getComputerChoice() {
    // initialize variable to store random number
    let computerNumber;
    // create random number variable between 0 - 2
    computerNumber = Math.floor(Math.random() * 3);
    console.log(computerNumber);
    // write switch statement to choose game roll based on number
    switch (computerNumber) {
        case 0:
            return "rock";
            //console.log(computerSelection);
        case 1:
            return "paper";
            //console.log(computerSelection);
        case 2: 
            return "scissors";
            //console.log(computerSelection);
    }
}

// write function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // if else statement of all possible combinations
    // tie
    if (playerSelection === computerSelection) {
        return "TIE";
    }
    // ALL PLAYER WIN SCENARIOS
    // player rock, computer scissors
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerWins;
        return "You win! Rock beats scissors.";
    }
    // player paper, computer rock
    else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerWins;
        return "You win! Paper beats rock.";
    }
    // player scissors, computer paper
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerWins;
        return "You win! Scissors beats paper";
    }
    // ALL COMPUTER WIN SCENARIOS
    // player rock, computer paper
    else if (playerSelection === "rock" && computerSelection === "paper") {
        ++computerWins;
        return "You lose! Paper beats rock.";
    }
    // player paper, computer scissors
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        ++computerWins;
        return "You lose! Scissors beats paper.";
    }
    // TEST THIS
    // player scissors, computer rock
    else {
        ++computerWins; 
        return "You lose! Rock beats scissors.";
    }
}

const playerSelection = "rock";
// console.log(playRound(playerSelection, computerSelection));
function playGame() {
    //loop 5 times
    for (let i = 0; i < 5; i++) {
        // play a round
        // get new computer choice
        const computerSelection = getComputerChoice();
        let roundResults = playRound(playerSelection, computerSelection);
        if (roundResults === "TIE") {
            console.log("It's a tie! Go again.");
            --i;
        }
        else {
            let currentScore = `\nPlayer score: ${playerWins}\nComputer score: ${computerWins}`;
            console.log(roundResults + currentScore);
        }
    }
    if (playerWins > computerWins) {
        console.log("Congratulations! You beat the computer. Keep it up!");
    }
    else if (playerWins < computerWins) {
        console.log("Oh no! You lost to the computer. Better luck next time!");
    }
    else {
        console.log("")
    }
}

// initiate variable to track number of wins
let playerWins = 0;
let computerWins = 0;
playGame();