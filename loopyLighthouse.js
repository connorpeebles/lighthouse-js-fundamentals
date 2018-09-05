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
}