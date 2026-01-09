let guess = 0;
let number = Math.floor(Math.random() * 100) + 1;

function makeGuess() {
  const input = document.getElementById("guessInput").value;
  const userGuess = Number(input);

  if (input === "" || isNaN(userGuess)) {
    document.getElementById("result").innerText = "Please enter a valid number!";
    return;
  }

  if (userGuess < number) {
    document.getElementById("result").innerText = "Too low!";
  } else if (userGuess > number) {
    document.getElementById("result").innerText = "Too high!";
  } else {
    document.getElementById("result").innerText = "Correct!";
  }
}


function resetGame() {
  number = Math.floor(Math.random() * 100) + 1;
  guess = 0;
  document.getElementById("result").innerText = "";
  document.getElementById("guessInput").value = "";
}

document.getElementById("resetGame").addEventListener("click", resetGame);