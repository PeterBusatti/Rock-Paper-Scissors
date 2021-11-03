/* create a function called computerPlay that will randomly return rock paper or
scissors 
*/
const CHOICE = ["Rock", "Paper", "Scissors"];

function computerPlay() {
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

/* create a function to play a single round, takes two parameters: playerSelection
and computerSelection.
if same choice return a tie. 
need cases for 3 player choices (r,p,s) with each case having two outcomes: win or
lose.
*/ 
let playerSelection; 

// function to get user prompt and basic input validation
function playerInput() {
    let playerChoice = window.prompt("Choose and type Rock, Paper or Scissors");
    playerChoice = playerChoice.toLowerCase();
    while (!(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors")) {
        playerChoice = window.prompt("Please ONLY enter Rock, Paper or Scissors");
        playerChoice = playerChoice.toLowerCase();
    }
    playerSelection = playerChoice;  
}

// function for ONE round of play, includes solution to avoid case sensitivity

// keeping both boolean variable global to reference them again
let win = Boolean(false); // if true player is winner, if false comp is winner
let tie = Boolean(false); // if true there is a tie, if false no tie

function playRound(playerSelection, computerSelection) {
    // case insensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // case of tie
    if (playerSelection == computerSelection) {
        tie = true; // setting tie boolean to true
        return "Tie! You both chose " + playerSelection;
    }
    // cases of loss
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" ||
              playerSelection === "scissors" && computerSelection === "rock") {
        tie = false; // setting tie boolean to false
        win = false; // false = player loss
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    // cases of win
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection == "rock" ||
              playerSelection === "scissors" && computerSelection === "paper") {
        tie = false;
        win = true;
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
}

// function to play a game to a score of 5 using a while loop
function game() {
    i = 0; // player win counter
    j = 0; // computer win counter
    while ((i < 5 && j != 5) || (j < 5 && i != 5)) { // i = player counter , j = computer counter
        playerInput();
        playRound(playerSelection, computerPlay());
        console.log(playRound(playerSelection, computerPlay()));
        
        if (tie) {
            //console.log("tie");
            i = i;
            j = j;
            console.log("player " + i);
            console.log("comp " + j);
        }
        else if (!(tie)) {
            if (win) {
                i++;
            }
            else if (!(win)) {
                j++;
            }
        console.log("player " + i);
        console.log("comp " + j);
        }
    }
    
    if (i == 5) {
        return "Player wins";
    }
    else if (j == 5) {
        return "Computer wins";
    }
}


