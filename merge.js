function merge(array1, array2) {
  var sorted = []
  var counter1 = 0;
  var counter2 = 0;
  while (counter1 < array1.length && counter2 < array2.length) {
    if (array1[counter1] <= array2[counter2]) {
      sorted.push(array1[counter1]);
      counter1++;
    } else {
      sorted.push(array2[counter2]);
      counter2++;
    }
  }
  while (counter1 < array1.length) {
    sorted.push(array1[counter1]);
    counter1++;
  }
  while (counter2 < array2.length) {
    sorted.push(array2[counter2]);
    counter2++;
  }
  return sorted;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);