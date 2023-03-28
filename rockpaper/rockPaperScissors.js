console.log("hi");

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("You can only use 'rock', 'paper' or 'scissors'.");
  }
};

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
    return "You won!!!";
  }
  if (userChoice === computerChoice) {
    return "Tie!";
  }
  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lost. Computer won.";
    } else {
      return "You won!";
    }
  }
  if (userChoice === "paper") {
    if (computerChoice === "rock") {
      return "You won!";
    } else {
      return "You lost. Computer won.";
    }
  }
  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lost. Computer won.";
    } else {
      return "You won!";
    }
  }
};

const playGame = () => {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice("rock");
  console.log(`User: ${userChoice}`);
  console.log(`Computer: ${computerChoice}`);
  let result = determineWinner(userChoice, computerChoice);
  console.log(result);
};

///////////////////
// TEST //
playGame();
