const CHOICE = ["Rock", "Paper", "Scissors"];
const playerOutput = document.getElementById("player-output");
const cpuOutput = document.getElementById("cpu-output");
const container = document.getElementById("container");
const btn = document.querySelectorAll("input");
const logDisplay = document.getElementById("log-display");
const replayButton = document.getElementById("reset-btn");

let playerScore = 0;
let cpuScore = 0;

btn.forEach(input => {input.addEventListener("mouseenter", addBorder)} );
btn.forEach(input => {input.addEventListener("mouseleave", removeBorder)} );
btn.forEach(input => {input.addEventListener("click", getPlayerChoice)} );

replayButton.addEventListener("click", () => location.reload());

function computerPlay() {
    return CHOICE[Math.floor(Math.random() * CHOICE.length)];
}

function playRound(playerSelection, computerSelection) {
    logDisplay.style.display = "block";
    // case insensitivity
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // case of tie
    if (playerSelection == computerSelection) {
        logDisplay.textContent = "Tie! You both chose " + playerSelection;
    }
    // cases of loss
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" ||
              playerSelection === "scissors" && computerSelection === "rock") {
        cpuScore++;
        cpuOutput.textContent = cpuScore;
        logDisplay.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    // cases of win
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection == "rock" ||
              playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        playerOutput.textContent = playerScore;
        logDisplay.textContent = "You Win! " + playerSelection + " beats " + computerSelection;  
    }
    checkWin();
}

function addBorder(e) {
    e.target.className = "btn-hover";
}

function removeBorder(e) {
    e.target.className = "btn";
}

function getPlayerChoice(e) {
    let playerChoice = e.target.id;
    playRound(playerChoice, computerPlay());
    console.log(playerScore);
    console.log(cpuScore);
}

function checkWin () {
    if (playerScore === 5 || cpuScore === 5) {
        btn.forEach(input => {
            input.removeEventListener("click", getPlayerChoice);
        });
        replayButton.style.backgroundColor = "red";
        replayButton.style.fontSize = "35px";
    }
    
    if (playerScore === 5){
        logDisplay.textContent = "Game Over! Congratulations you WIN!";
        
    } 
    else if (cpuScore === 5){
        logDisplay.textContent = "Game Over! Sorry you LOSE!";
    }
}


