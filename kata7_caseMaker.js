var makeCamel = function(input) {
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

var makePascal = function(input) {
  var str = "";
  if (input.length > 0) {
    str = input.substring(0, 1).toUpperCase() + input.substring(1);
  }
  return makeCamel(str);
};

var makeSnake = function(input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    var char = input.substring(i, i + 1);
    if (char === " ") {
      output += "_";
    } else {
      output += char;
    }
  }
  return output;
};

var makeKebab = function(input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    var char = input.substring(i, i + 1);
    if (char === " ") {
      output += "-";
    } else {
      output += char;
    }
  }
  return output;
};

var makeTitle = function(input) {
  var output = "";
  var str = "";
  var caps = false;
  if (input.length > 0) {
    str = input.substring(0, 1).toUpperCase() + input.substring(1);
  }
  for (var i = 0; i < str.length; i++) {
    var char = str.substring(i, i + 1);
    if (char === " ") {
      output += char;
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

var makeVowel = function(input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    var char = input.substring(i, i + 1);
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      output += char.toUpperCase();
    } else {
      output += char;
    }
  }
  return output;
};

var makeConsonant = function(input) {
  var output = "";
  for (var i = 0; i < input.length; i++) {
    var char = input.substring(i, i + 1);
    if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
      output += char;
    } else {
      output += char.toUpperCase();
    }
  }
  return output;
};

function makeCase(string, style) {
  var output = string;
  var stylesList = [];
  var camel = false;
  var pascal = false;
  var snake = false;
  var kebab = false;
  var title = false;
  var vowel = false;
  var consonant = false;
  var upper = false;
  var lower = false;
  if (typeof(style) == typeof("string")) {
    stylesList.push(style);
  } else {
    stylesList = style;
  }
  for (var i = 0; i < stylesList.length; i++) {
    if (stylesList[i] === "camel") {
      camel = true;
    } else if (stylesList[i] === "pascal") {
      pascal = true;
    } else if (stylesList[i] === "snake") {
      snake = true;
    } else if (stylesList[i] === "kebab") {
      kebab = true;
    } else if (stylesList[i] === "title") {
      title = true;
    } else if (stylesList[i] === "vowel") {
      vowel = true;
    } else if (stylesList[i] === "consonant") {
      consonant = true;
    } else if (stylesList[i] === "upper") {
      upper = true;
    } else if (stylesList[i] === "lower") {
      lower = true;
    }
  }
  if (camel === true) {
    output = makeCamel(output);
  }
  if (pascal === true) {
    output = makePascal(output);
  }
  if (snake === true) {
    output = makeSnake(output);
  }
  if (kebab === true) {
    output = makeKebab(output);
  }
  if (title === true) {
    output = makeTitle(output);
  }
  if (vowel === true) {
    output = makeVowel(output);
  }
  if (consonant === true) {
    output = makeConsonant(output);
  }
  if (upper === true) {
    output = output.toUpperCase();
  }
  if (lower === true) {
    output = output.toLowerCase();
  }
  return output;
}

console.log(makeCase("this is a stRing", ["snake", "lower"]));
console.log(makeCase("this is a string", ["snake", "camel"]));