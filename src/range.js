
/**
 * Create a sequence of numbers from a to b
 *
 * @param {number} a
 * @param {number} [b=0]
 * @returns {Number[]} a list of integers from a to b
 */
function range (a, b = 0) {
  if (b > 0) {
    return [...Array(b).keys()].slice(a)
  }

  return [...Array(a).keys()]
}

module.exports = range
