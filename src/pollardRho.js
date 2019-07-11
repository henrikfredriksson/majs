const gcd = require('./gcd')

/**
 * Finds the prime factors p,q of integer n = p*q
 *
 * @param {Number} n
 * @returns {Number} factor d of integer n
 */
function pollardRho (n) {
  const g = (x, n) => {
    return (Math.pow(x, 2) + 1) % n
  }

  let x = 2
  let y = 2
  let d = 1

  while (d === 1) {
    x = g(x, n)
    y = g(g(y, n), n)

    d = gcd(Math.abs(x - y), n)
  }

  if (d === n) {
    return false
  } else {
    return [d, n / d].sort((x, y) => x - y)
  }
}

module.exports = pollardRho
