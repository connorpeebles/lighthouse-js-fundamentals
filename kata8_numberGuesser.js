var prompt = require("prompt-sync")();

function numberGuesser() {
  var number = Math.floor((Math.random() * 100) + 1);
  var guess = Number(prompt("Guess a number: "));
  var guesses = [];
  var alreadyGuessed = false;
  var counter = 1;
  while (guess !== number) {
    if (isNaN(guess)) {
      console.log("Not a number! Try again!");
    } else if (alreadyGuessed === true) {
      console.log("Already Guessed!");
      alreadyGuessed = false;
    } else if (guess > number) {
      console.log("Too High!");
      guesses.push(guess);
      counter++;
    } else if (guess < number) {
      console.log("Too Low!");
      guesses.push(guess);
      counter++;
    } else if (guess === number) {
      break;
    }
    guess = Number(prompt("Guess a number: "));
    for (var i = 0; i < guesses.length; i++) {
      if (guess === guesses[i]) {
        alreadyGuessed = true;
        break;
      }
    }
  }
  console.log("You got it! You took " + String(counter) + " attempts!");
}

numberGuesser();