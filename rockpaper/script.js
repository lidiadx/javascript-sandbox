
const rockSpan = document.getElementById('rock');
const paperSpan = document.getElementById('paper');
const sciSpan = document.getElementById('scissors');


const rockDiv = document.getElementById('rock');
const paperDiv = document.getElementById('paper');
const sciDiv = document.getElementById('scissors');

const userChoiceDiv = document.getElementById('user');
const computerChoiceDiv = document.getElementById('computer');
const resultDiv = document.getElementById('result');

// Returns the user choice
function getUserChoice(event) {
  const choice = event.target.id;
  if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
    return choice;
  }
}

// Returns the computer choice
const getComputerChoice = () => {
  const choice = Math.floor(Math.random() * 3);
  let result;
  if (choice === 0) {
    result = "rock";
  } else if (choice === 1) {
    result = "paper";
  } else {
    result = "scissors";
  }
  return result;
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === "bomb") {
    return "user";
  }
  if (userChoice === computerChoice) {
    return "tie";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "computer";
    } else {
      return "user";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "user";
    } else {
      return "computer";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "computer";
    } else {
      return "user";
    }
  }
};

function updateGameResult(event) {
  const userChoice = getUserChoice(event);
  const computerChoice = getComputerChoice();
  const result = determineWinner(userChoice, computerChoice);

  userChoiceDiv.textContent = userChoice;
  computerChoiceDiv.textContent = computerChoice;
  resultDiv.textContent = result.toUpperCase();

}

rockDiv.addEventListener('click', updateGameResult);
paperDiv.addEventListener('click', updateGameResult);
sciDiv.addEventListener('click', updateGameResult);