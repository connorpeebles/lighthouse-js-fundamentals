var repeatNumbers = function(data) {
  var string = "";
  for (var array = 0; array < data.length; array++) {
    var num = data[array][0];
    var repeats = data[array][1];
    for (var i = 0; i < repeats; i++) {
      string += num;
    }
    if (array + 1 < data.length) {
      string += ", ";
    }
  }
  return string;
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));