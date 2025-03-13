//reference: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

let secretNumber = Math.floor(Math.random() * 10) + 1;

function guessNumber() {
  let guess = prompt("Guess a number between 1 and 10 and that's on . ");

  guess= Number(guess);
  if (guess < secretNumber) {
    window.alert("Yikes miss mamas, try that again.");
    guessNumber();
  } else if (guess > secretNumber) {
    window.alert("Sorry Pookie. Try again.");
    guessNumber();
  } else if (guess === secretNumber) {
    window.alert("You got it! You're a winner!");
  } 
}

guessNumber();
console.log(secretNumber);
