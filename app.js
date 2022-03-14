const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");

const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;

// FOR EACH CHOICE DO ...

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", myEvent)
);

// myEvent played when EventListener detects a click
function myEvent(e) {
  userChoice = e.target.id;
  userChoiceDisplay.innerHTML = userChoice;
  generateComputerChoice();
  getResult();
}

// GENERATE A INTEGER BASED ON CHOICES LENGHT ( = 3 )
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1; // so 3 choices
  // +1 to avoid starting at 0
  console.log(randomNumber);

  if (randomNumber === 1) {
    computerChoice = "rock";
  }
  if (randomNumber === 2) {
    computerChoice = "scissors";
  }
  if (randomNumber === 3) {
    computerChoice = "paper";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

// THE RESULT
function getResult() {
  if (computerChoice === userChoice) {
    result = "its a draw!";
  }
  if (computerChoice === "rock" && userChoice === "paper") {
    result = "you win!";
  }
  if (computerChoice === "rock" && userChoice === "scissors") {
    result = "you lost!";
  }
  if (computerChoice === "paper" && userChoice === "scissors") {
    result = "you win!";
  }
  if (computerChoice === "paper" && userChoice === "rock") {
    result = "you lost!";
  }
  if (computerChoice === "scissors" && userChoice === "rock") {
    result = "you win!";
  }
  if (computerChoice === "scissors" && userChoice === "paper") {
    result = "you lost!";
  }
  resultDisplay.innerHTML = result;
}
