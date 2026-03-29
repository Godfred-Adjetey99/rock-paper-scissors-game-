const score = JSON.parse(localStorage.getItem("scores")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

const scoreBoard = document.querySelector("#scores");
const resultBoard = document.querySelector("#result");
const moveBoard = document.querySelector("#moves");

const updateScore = () => {
  scoreBoard.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
};

const resetGame = () => {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;

  localStorage.removeItem("scores");

  updateScore();
};

const playGame = (playerMove) => {
  const computerMove = computerChoice();

  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "You Tie";
    } else if (computerMove === "paper") {
      result = "You Lose";
    } else if (computerMove === "scissors") {
      result = "You Win";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "rock") {
      result = "You Win";
    } else if (computerMove === "paper") {
      result = "You Tie";
    } else if (computerMove === "scissors") {
      result = "You Lose";
    }
  } else if (playerMove === "scissors") {
    if (computerMove === "rock") {
      result = "You Lose";
    } else if (computerMove === "paper") {
      result = "You Win";
    } else if (computerMove === "scissors") {
      result = "You Tie";
    }
  }

  if (result === "You Win") {
    score.wins++;
  } else if (result === "You Lose") {
    score.losses++;
  } else if (result === "You Tie") {
    score.ties++;
  }

  localStorage.setItem("scores", JSON.stringify(score));

  moveBoard.innerHTML = `You chose ${playerMove} and computer Chose ${computerMove} `;
  resultBoard.innerHTML = result;

  updateScore();

  //   alert(`You Picked ${playerMove}. Computer Picked ${computerMove}. ${result}
  // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
};

const computerChoice = () => {
  let computerMove = "";
  const randomNum = Math.random();
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else if (randomNum >= 2 / 3 && randomNum < 1) {
    computerMove = "scissors";
  }

  return computerMove;
};
