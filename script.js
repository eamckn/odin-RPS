
// write function that gets a choice for the computer
function getComputerChoice() {
    //initialize variable to store random number
    let computerNumber;
    //initialize variable to store game choice
    let computerSelection;
    //create random number variable between 0 - 2
    computerNumber = Math.floor(Math.random() * 3);
    console.log(computerNumber);
    //write switch statement to choose game roll based on number
    switch (computerNumber) {
        case 0:
            computerSelection = "rock";
            console.log(computerSelection);
            break;
        case 1:
            computerSelection = "paper";
            console.log(computerSelection);
            break;
        case 2: 
            computerSelection = "scissors";
            console.log(computerSelection);
    }
}
getComputerChoice();