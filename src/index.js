const app = document.getElementById("app");

const title = document.createElement("h1");
title.textContent = "Number Guessing Game";
app.appendChild(title);

const instructions = document.createElement("p");
instructions.textContent = "Guess a number between 1 and 100. You have 5 attempts!";
app.appendChild(instructions);

const attemptsDisplay = document.createElement("p");
attemptsDisplay.textContent = "Remaining Attempts: 5";
app.appendChild(attemptsDisplay);

const feedback = document.createElement("p");
feedback.textContent = "Good luck!";
app.appendChild(feedback);

const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 5;

function startGame() {
    if(attempts > 0) {
        const guess = window.prompt("Enter your guess: ");
        // console.log(guess)
        if(guess === null) {
            feedback.textContent = "Game canceled.";
            return;
        }
        const userGuess = parseInt(guess, 10);

        if(isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = "Please enter a valid number between 1 and 100.";
            return;
        }

        if (userGuess === randomNumber) {
            feedback.textContent = `Congratulations! ${randomNumber} was the correct number!`;
            attemptsDisplay.textContent = "Game Over.";
            return;
        } else if (userGuess > randomNumber) {
            feedback.textContent = "Too high! Try again.";
        } else {
            feedback.textContent = "Too low! Try again.";
        }
          attempts--;
          attemptsDisplay.textContent = `Remaining Attempts: ${attempts}`;
    }
    if (attempts === 0) {
        feedback.textContent = `Game Over! The correct number was ${randomNumber}.`;
        attemptsDisplay.textContent = "Game Over.";
    } else {
    
        setTimeout(startGame, 1000); 
    }
}
startGame()