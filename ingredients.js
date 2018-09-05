var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var counter = 0;

while (counter < ingredients.length) {
  console.log(ingredients[counter]);
  counter++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\n")

for (counter = 0; counter < ingredients.length; counter++) {
  console.log(ingredients[counter]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\n")

for (counter = ingredients.length - 1; counter >= 0; counter--) {
  console.log(ingredients[counter]);
}