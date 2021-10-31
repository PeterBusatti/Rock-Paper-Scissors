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

    if (!(playerChoice.toLowerCase() == ("rock" || "paper" || "scissors"))) {
        playerChoice = window.prompt("Please ONLY type Rock, Paper or Scissors");       
    }
    else (playerChoice.toLowerCase() == ("rock" || "paper" || "scissors"))
        playerSelection = playerChoice;
}

// function for ONE round of play, includes solution to avoid case sensitivity

// keeping both boolean variable global to reference them again
let isWin = Boolean(false); // if true player is winner, if false comp is winner
let isTie = Boolean(false); // if true there is a tie, if false no tie

function playRound(playerSelection, computerSelection) {
    // case insensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // case of tie
    if (playerSelection == computerSelection) {
        isTie = true; // setting tie boolean to true
        return "Tie! You both chose " + playerSelection;
    }
    // cases of non tie
    else if (playerSelection == "rock") {
        isTie = false; // setting tie boolean to false
        if (computerSelection == "paper") {
            isWin = false; // setting win or lose boolean to false because of loss
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }
        else if (computerSelection == "scissors") {
            isWin = true; // setting winOrLoss boolean to true because of win
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
    }
    else if (playerSelection == "paper") {
        isTie = false;
        if (computerSelection == "rock") {
            isWin = true;
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }
        else if (computerSelection == "scissors") {
            isWin = false;
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }
    }
    else if (playerSelection == "scissors") {
        isTie = false;
        if (computerSelection == "rock") {
            isWin = false;
            return "You Lose! " + computerSelection + " beats " + playerSelection;
        }
        else if (computerSelection == "paper") {
            isWin = true;
            return "You Win! " + playerSelection + " beats " + computerSelection;
        }   
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
        
        if (isTie) {
            //console.log("tie");
            i = i;
            j = j;
            console.log("player " + i);
            console.log("comp " + j);
        }
        else if (!(isTie)) {
            if (isWin) {
                i++;
            }
            else if (!(isWin)) {
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

//const computerSelection = computerPlay();

//console.log(playRound(playerSelection, computerPlay()))
