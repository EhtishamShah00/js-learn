// My Methoad
// const form = document.querySelector(".form");
// const guessRemaing = document.querySelector(".lastResult");

// form.addEventListener("submit", function (e) {
//   const gessfield = parseInt(document.querySelector(".guessField").value);
//   const gessSubmit = document.querySelector(".guessSubmit");
//   const guesses = document.querySelector(".guesses");
//   let minusGuess = parseInt(guessRemaing.innerHTML);
//   const randomNum = Math.floor(Math.random() * 100 + 1);
//   if (gessfield === randomNum) {
//     alert("correct");
//   } else if (gessfield != randomNum) {
//     if (minusGuess > 0) {
//       alert("Not correct");
//       minusGuess = minusGuess - 1;
//       guessRemaing.innerHTML = minusGuess;
//     } else {
//       alert("RELOAD");
//     }
//   }
//   guesses.appendChild(document.createTextNode(`${gessfield},`));

//   e.preventDefault();
// });

//Techer Methoad

let random = Math.floor(Math.random() * 100 + 1);
const allguesses = document.querySelector(".guesses");
const remainingChances = document.querySelector(".lastResult");
const lowORhigh = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");
const guessInput = document.querySelector(".guessField");
const submit = document.querySelector("#subt");
const p = document.createElement("p");
const form = document.querySelector("form");

let prevGame = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(guessInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please Enter a valid Number");
  } else if (guess < 1) {
    alert("Number is to low it should be between 1 to 100");
  } else if (guess > 100) {
    alert("Number is to high it shoube be between 1 to 100");
  } else {
    prevGame.push(guess);
    if (numGuess > 10) {
      displayGuess(guess);
      displayMessage(`GAME OVER, Random Number was ${random}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}
function checkGuess(guess) {
  if (guess === random) {
    displayMessage(`You gets it right the Random Number was ${random}`);
    endGame();
  } else if (guess < random) {
    displayMessage("Your Guess is Lower then Random Number");
  } else if (guess > random) {
    displayMessage("Your Guess is higher then Random Number");
  }
}
function displayGuess(guess) {
  guessInput.value = "";
  allguesses.innerHTML += `${guess}, `;
  numGuess++;
  remainingChances.innerHTML = `${10 - numGuess}`;
}
function displayMessage(message) {
  lowORhigh.innerHTML = message;
}
function endGame() {
  guessInput.innerHTML = "";
  guessInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}
function newGame() {
  const newGameButton = document.querySelector("#newGame");

  newGameButton.addEventListener("click", function (e) {
    random = Math.floor(Math.random() * 100 + 1);
    prevGame = [];
    numGuess = 1;
    allguesses.innerHTML = "";
    remainingChances.innerHTML = `${10 - numGuess}`;
    guessInput.removeAttribute("disabled");
    startOver.removeChild(p);
    lowORhigh.innerHTML = "";
    playGame = true;
    e.preventDefault();
  });
}
