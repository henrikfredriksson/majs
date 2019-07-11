
/**
 * Returns the n'th Fibonacci number
 *
 * @param {Number} n Index of Fibonacci number
 * @returns {Number} the n'th Fibonacci number
 */
function fibonacci (n) {
  let res = fibTuple(n)
  return res.shift()
}

const fibTuple = (n) => {
  if (n === 0) {
    return [0, 1]
  } else {
    const a = fibTuple(Math.floor(n / 2))
    const b = a[0] * (a[1] * 2 - a[0])
    const c = Math.pow(a[0], 2) + Math.pow(a[1], 2)

    if (n % 2 === 0) {
      return [b, c]
    } else {
      return [c, b + c]
    }
  }
}

module.exports = fibonacci


