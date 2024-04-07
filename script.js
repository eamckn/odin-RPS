
// write function that gets a choice for the computer
function getComputerChoice() {
    // initialize variable to store random number
    let computerNumber;
    // initialize variable to store game choice
    let computerSelection;
    // create random number variable between 0 - 2
    computerNumber = Math.floor(Math.random() * 3);
    console.log(computerNumber);
    // write switch statement to choose game roll based on number
    switch (computerNumber) {
        case 0:
            computerSelection = "rock";
            //console.log(computerSelection);
            break;
        case 1:
            computerSelection = "paper";
            //console.log(computerSelection);
            break;
        case 2: 
            computerSelection = "scissors";
            //console.log(computerSelection);
    }
    return computerSelection;
}

// write function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // if else statement of all possible combinations
    // tie
    if (playerSelection === computerSelection) {
        return "It's a tie! Go again.";
    }
    // player wins
    // player rock, computer scissors
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    }
    // player paper, computer rock
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    }
    // player scissors, computer paper
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper";
    }
    // computer wins
    // player rock, computer paper
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    }
    // player paper, computer scissors
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";
    }
    // TEST THIS
    // player scissors, computer rock
    else {
        return "You lose! Rock beats scissors.";
    }
}
