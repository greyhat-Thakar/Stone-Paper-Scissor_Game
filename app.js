let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");

/* // 4th function for generating computer choices */
const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(
    Math.random() * 3
  ); /* generating random index from the Array(const options) */
  return options[randIndex];
};

//condition for a Draw
const drawGame = () => {
  console.log("It's a Draw!");
  msg.innerText = "It's a Draw! 🌚";
};

// updating the score on frontend using showWinner function
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreCount.innerText = userScore;
    msg.innerText = `You won! 😁 Your ${userChoice} beats ${compChoice}`;
    console.log("you won!");
  } else {
    compScore++;
    compScoreCount.innerText = compScore;
    msg.innerText = `Sorry! You loose. 😓 ${compChoice} beats your ${userChoice}`;
    console.log("Sorry! You loose.");
  }
};

// game LOGIC
const playGame = (userChoice) => {
  /* 2nd Generate user choices */
  console.log("user choice is", userChoice);
  const compChoice = genCompChoice(); /* 3rd  Generate computer choices */
  console.log("comp choice is", compChoice);

  if (userChoice === compChoice) {
    //draw game condition
    drawGame();
  } else {
    let userWin = true; /* userWin tracks if the user won or not
     assuming that the user has won */

    if (userChoice === "rock") {
      //computer will choose either paper or scissor
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //computer will choose either scissors or rock
      userWin = compChoice === "scissors" ? false : true;
    } else {
      /* user chose scissors */
      //computer will choose either rock or paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

// 1st function for generating user choice using eventListener
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
