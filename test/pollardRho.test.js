const pollardRho = require('../src/pollardRho')

describe('Test PollardRho module', () => {
  it('10403 factored should return [101,103]', () => {
    expect(pollardRho(10403)).toEqual([101, 103])
  })

  it('1310201 should return [1049, 1249] ', () => {
    expect(pollardRho(1310201)).toEqual([1049, 1249])
  })

  it('4294967291 is prime, should return false ', () => {
    expect(pollardRho(4294967291)).toBe(false)
  })
})
