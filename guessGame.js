// ask for the user input

// javascript

// prompt

const playerInput = prompt("Guess a number between 1-10");

// create lucky number
const luckyNum = Math.floor(Math.random() * 10) + 1;

console.log(luckyNum);

let playerScore = 0;

if (parseInt(playerInput) === luckyNum) {
  playerScore = playerScore + 5;
  //   playerScore += 5;
  console.log("Congratulations, you got it");
} else {
  console.log("Sorry you missed it");
}
