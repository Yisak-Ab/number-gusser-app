let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random()*10);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
  if(humanGuess === targetNumber || Math.abs(humanGuess - targetNumber) <= 2) {
    return true;
  } else if (computerGuess === targetNumber || Math.abs(computerGuess - targetNumber) <= 2) {
    return false;
  } else {
    return true;
  }
}

function updateScore(winner) {
  if(winner === humanScore) {
  humanScore += 1;
} if (winner === computerScore) {
  computerScore += 1;
}
console.log(updateScore)
}
function advanceRound() {
  currentRoundNumber += 1;
}

