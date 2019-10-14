const factor = require('../src/factor')

describe('Test factor module', () => {
  test('2', () => {
    expect(factor(2)).toEqual([2])
  })

  test('15 = 3*5', () => {
    expect(factor(5)).toEqual([5])
  })

  test('15 = 3*5', () => {
    expect(factor(15)).toEqual([3, 5])
  })

  test('15 = 3*5', () => {
    expect(factor(120)).toEqual([2, 2, 2, 3, 5])
  })

  test('4328', () => {
    expect(factor(4328)).toEqual([2, 2, 2, 541])
  })

  test('4328', () => {
    expect(factor(16807)).toEqual([7, 7, 7, 7, 7])
  })
})
