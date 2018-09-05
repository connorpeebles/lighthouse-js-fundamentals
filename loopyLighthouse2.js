function loopyLighthouse(range, multiples, words) {
  var counter = range[0];
  while (counter <= range[1]) {
    if (counter % multiples[0] === 0 && counter % multiples[1] === 0) {
      console.log(words[0] + words[1]);
    } else if (counter % multiples[0] === 0) {
      console.log(words[0]);
    } else if (counter % multiples[1] === 0) {
      console.log(words[1]);
    } else {
      console.log(counter)
    }
    counter++;
  }
}

loopyLighthouse([15,90], [2,5], ["Batty","Beacon"]);

/*
var counter = 100;

while (counter < 201) {
  if (counter % 3 == 0 && counter % 4 == 0) {
    console.log("LoopyLighthouse");
  } else if (counter % 3 == 0) {
    console.log("Loopy");
  } else if (counter % 4 == 0) {
    console.log("Lighthouse");
  } else {
    console.log(counter)
  }
  counter++;
}*/