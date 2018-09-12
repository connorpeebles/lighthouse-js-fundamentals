var prompt = require("prompt-sync")();

function squareCode() {
  var input = prompt("Enter a message with no spaces, with a maximum length of 81 characters: ");
  var numWords = Math.ceil(Math.sqrt(input.length));
  var fullWords;
  if (input.length % numWords === 0) {
    fullWords = numWords;
  } else {
    fullWords = input.length % numWords;
  }
  var output = "";
  for (var i = 0; i < fullWords; i++) {
    for (var j = i; j < input.length; j = j + numWords) {
      output += input.substring(j, j+1);
    }
    output += " ";
  }
  for (i; i < numWords; i++) {
    for (j = i; j < input.length; j = j + numWords) {
      output += input.substring(j, j+1);
    }
    output += " ";
  }
  console.log(output);
}

squareCode();