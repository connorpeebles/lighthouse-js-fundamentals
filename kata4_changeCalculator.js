var calculateChange = function(total, cash) {
  var difference = cash - total;
  var change = {};
  var money = [["twenty", 2000], ["ten", 1000], ["five", 500], ["twoDollar", 200], ["dollar", 100], ["quarter", 25], ["dime", 10], ["nickel", 5], ["penny", 1]];
  for (var i = 0; i < money.length; i++) {
    var add = Math.floor(difference / money[i][1]);
    if (add > 0) {
      change[money[i][0]] = add;
      difference -= (add * money[i][1]);
    }
  }
  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));