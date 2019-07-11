/**
 * Calculates the greatest common divisor of integers a and b
 * *
 * @param {*} a
 * @param {*} b
 * @returns {Number} greatest common divisior
 */

module.exports = function gcd (a, b) {
  if (!b) {
    return a
  }

  return gcd(b, a % b)
}



