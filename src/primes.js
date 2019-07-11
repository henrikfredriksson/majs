const isPrime = n => {
  try {
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
      if (n % i === 0) throw new Error()
    }

    return true
  } catch (e) {
    return false
  }
}

module.exports = isPrime
