
function probablyPrime (n, k = 64) {
  if (n === 2 || n === 3) {
    return true
  }
  if (n % 2 === 0 || n % 3 === 0 || n < 2) {
    return false
  }

  // Write (n - 1) as 2^s * d
  let s = 0
  let d = n - 1
  while (d % 2 === 0) {
    d /= 2
    ++s
  }

  const witness = n => {
    return Math.floor(Math.random() * (n - 2)) + 2
  }

  while (k--) {
    let a = Math.pow(witness(n), s)

    if (a % n === 1 || a % n === n - 1) continue
    for (let i = 0; i < s; i++) {
      if (a === 1) return false
      if (a === n - 1) continue
    }

    a = Math.pow(a, 2) % n
  }
  return true
}

module.exports = probablyPrime
