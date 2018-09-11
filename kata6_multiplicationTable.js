function drawLine(maxValue, placeValue) {
  var output = "+";
  while (maxValue > 0) {
    var i = placeValue + 2;
    while (i > 0) {
      output += "-";
      i -= 1;
    }
    output += "+";
    maxValue -= 1;
  }
  output += "\n";
  return output;
}

var multiplicationTable = function(maxValue) {
  var output = "";
  var maxProd = maxValue * maxValue;
  var placeValue = String(maxProd).length;
  var line = drawLine(maxValue, placeValue);
  output += line;
  for (var row = 1; row <= maxValue; row++) {
    for (var column = 1; column <= maxValue; column++) {
      var value = String(row * column);
      output = output + "| " + value;
      for (var i = value.length + 1; i < placeValue + 2; i++) {
        output += " ";
      }
    }
    output = output + "|\n" + line;
  }
  return output;
}

console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));