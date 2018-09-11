var camelCase = function(input) {
  var output = "";
  var caps = false;
  for (var i = 0; i < input.length; i++) {
    var char = input.substring(i, i + 1);
    if (char === " ") {
      caps = true;
    } else if (caps === true) {
      output += char.toUpperCase();
      caps = false;
    } else {
      output += char;
    }
  }
  return output;
};

console.log(camelCase("this  is  a  string"));
console.log(camelCase("loopy lighthouse    "));
console.log(camelCase("supercalifragalisticexpialidocious "));