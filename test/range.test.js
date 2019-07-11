const range = require('../src/range')

describe('Test Range module', () => {
  it('range(10) should give a list [0, 1, 2,...,9]', () => {
    expect(range(10)).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  })

  it('range(2,6) should give a list [2, 3, 4, 5, 5 ]', () => {
    expect(range(2, 6)).toStrictEqual([2, 3, 4, 5])
  })
})
