
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
        return "It's a tie! Go again.";
    }
    // ALL PLAYER WIN SCENARIOS
    // player rock, computer scissors
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        ++playerwins;
        return "You win! Rock beats scissors.";
    }
    // player paper, computer rock
    else if (playerSelection === "paper" && computerSelection === "rock") {
        ++playerwins;
        return "You win! Paper beats rock.";
    }
    // player scissors, computer paper
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        ++playerwins;
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
    // initiate variable to track number of wins
    let playerWins = 0;
    let computerWins = 0;
    //loop 5 times
    for (let i = 0; i < 5; i++) {
        // play a round
        // get new computer choice
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

playGame();