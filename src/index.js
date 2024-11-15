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