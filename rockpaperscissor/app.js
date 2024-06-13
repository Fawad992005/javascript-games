// Element selectors
let playerscore = document.querySelector("#playerscore");
let compscore = document.querySelector("#compscore");
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");
let answer = document.querySelector("#answer");
let answer2 = document.querySelector("#answer2");

// Game choices
let game = ["rock", "paper", "scissor"];
let playerCount = 0;
let compCount = 0;
let turnCount = 0;
const maxTurns = 10; // Set the maximum number of turns

// Get a random choice for the computer
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}

// Determine the winner
function determineWinner(user, comp) {
    if (user === comp) {
        return "draw";
    } else if (
        (user === "rock" && comp === "scissor") ||
        (user === "paper" && comp === "rock") ||
        (user === "scissor" && comp === "paper")
    ) {
        return "player";
    } else {
        return "comp";
    }
}

// Display the final result
const maxwin = () => {
    if (playerCount === compCount) {
        answer2.innerHTML = "It's a draw overall!";
    } else if (playerCount > compCount) {
        answer2.innerHTML = "Player wins the set!";
    } else {
        answer2.innerHTML = "Computer wins the set!";
    }
}

// Handle game logic
function playGame(userChoice) {
    if (turnCount < maxTurns) {
        let computerChoice = game[getComputerChoice()];
        let result = determineWinner(userChoice, computerChoice);

        if (result === "draw") {
            answer.innerHTML = `Turn ${turnCount + 1}: It's a draw! Both chose ${userChoice}`;
        } else if (result === "player") {
            playerCount += 1;
            playerscore.innerHTML = playerCount;
            answer.innerHTML = `Turn ${turnCount + 1}: Player wins! Player chose ${userChoice}, Computer chose ${computerChoice}`;
        } else {
            compCount += 1;
            compscore.innerHTML = compCount;
            answer.innerHTML = `Turn ${turnCount + 1}: Computer wins! Player chose ${userChoice}, Computer chose ${computerChoice}`;
        }
        
        turnCount += 1; // Increment the turn count

        if (turnCount === maxTurns) {
            maxwin();
            setTimeout(resetGame, 5000); // Reset game after 5 seconds
        }
    }
}

// Add event listeners
paper.addEventListener("click", () => playGame("paper"));
rock.addEventListener("click", () => playGame("rock"));
scissor.addEventListener("click", () => playGame("scissor"));

// Reset the game for a new set
function resetGame() {
    playerCount = 0;
    compCount = 0;
    turnCount = 0;
    playerscore.innerHTML = playerCount;
    compscore.innerHTML = compCount;
    answer.innerHTML = "Click an option to start the game";
    answer2.innerHTML = "";
}
