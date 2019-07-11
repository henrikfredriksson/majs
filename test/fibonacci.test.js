const fibonacci = require('../src/fibonacci')

describe('Test Fibonacci module', () => {
  it('The 1st Fibonacci number shold be 1', () => {
    expect(fibonacci(1)).toBe(1)
  })

  it('The 3rd Fibonacci number shold be 2', () => {
    expect(fibonacci(3)).toBe(2)
  })

  it('The 100th Fibonacci number should be 354224848179261915075', () => {
    expect(fibonacci(100)).toBe(354224848179261915075)
  })
})
