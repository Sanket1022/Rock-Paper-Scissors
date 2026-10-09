let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScorecount = document.querySelector("#user-score");
const compScorecount = document.querySelector("#computer-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
};

const drawGame = (userChoice) => {
  console.log("Game was Draw, Play Again");
  msg.innerText = "Game was DrawPlay Again";
  msg.style.backgroundColor = "#1b2a41";
};

const showWinner = (userwin, userChoice, comChoice) => {
  if (userwin) {
    userScore++;
    userScorecount.innerText = userScore;
    console.log("you win !");
    msg.innerText = `You Win ! Your ${userChoice} beats ${comChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorecount.innerText = compScore;
    console.log("you lose");
    msg.innerText = `You Lose  ${comChoice} beats yours ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  //Generate Computer Choice
  const comChoice = genCompChoice();
  console.log("comp choice =", comChoice);

  if (userChoice === comChoice) {
    //Draw Game
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      //Scissors , paper
      userwin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock,scissors
      userwin = comChoice === "scissors" ? false : true;
    } else {
      // rock , paper userchoice = scissors
      userwin = comChoice === "rock" ? false : true;
    }
    showWinner(userwin, userChoice, comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
