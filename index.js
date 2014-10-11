var factorial = require('factorial');

function chudnovsky(n) {
  var ret = 0;

  for (var k = 0; k <= n; k++) {
    var x = Math.pow(-1, k) * factorial(6 * k) * (163 * 3344418 * k + 13591409);
    x /= factorial(3 * k) * Math.pow(factorial(k), 3) * Math.pow(640320, 3 * k + 3 / 2);
    ret += x;
  }

  ret *= 12;

  return 1 / ret;
}

module.exports = chudnovsky;