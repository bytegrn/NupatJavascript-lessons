const rps = [1, 2, 3];

const choices = ["🪨", "🧻", "✂️"];
/**
 * 1 => rock
 * 2 => paper
 * 3 => scissors
 */

// dom elements
let computerPick = document.querySelector(".right");
let playerPick = document.querySelector(".left");

const playBtnEl = document.querySelector(".play-btn");

// console.log(computerPick, playerPick, playBtnEl);

// Game logic

/**
 * 1. A player press the play button
 * 2. The computer choses between rock, paper and scissors
 * 3. The player selects either rock, paper or scissors
 *
 */

// Arrow function
// hoisting
const startGame = () => {
  init(); //  function call/invocation
};

playBtnEl.addEventListener("click", startGame);

function init() {
  let computerChoice = null;
  let playerChoice = null;

  //   computerChoice = rps[Math.floor(Math.random() * 3)];
  computerChoice = rps[Math.floor(Math.random() * 3)];
  playerChoice = parseInt(prompt("Choose a number between 1-3"));

  //   visually indicate what item was selected by the player or computer
  computerPick.textContent = choices[computerChoice - 1];
  playerPick.textContent = choices[playerChoice - 1];

  setTimeout(() => {
    switch (computerChoice) {
      case 1:
        if (playerChoice === 1) {
          alert("It is a draw");
        } else if (playerChoice === 2) {
          alert("Player wins the game");
        } else if (playerChoice === 3) {
          alert("Computer wins the game");
        }
        break;
      case 2:
        if (playerChoice === 1) {
          alert("Computer wins");
        } else if (playerChoice === 2) {
          alert("It is a draw");
        } else if (playerChoice === 3) {
          alert("Player wins");
        }
        break;
      case 3:
        if (playerChoice === 1) {
          alert("Player wins");
        } else if (playerChoice === 2) {
          alert("Computer wins");
        } else if (playerChoice === 3) {
          alert("It is a draw");
        }
        break;
      default:
        computerChoice === 1;
    }
  }, 1000);
}

