const millerRabin = require('../src/millerRabin')

describe('Test Miller-Rabin moduled', () => {
  it('2 is prime', () => {
    expect(millerRabin(2)).toBe(true)
  })

  it('10 is composite', () => {
    expect(millerRabin(10)).toBe(false)
  })

  it('15487469 is prime', () => {
    expect(millerRabin(15487469)).toBe(true)
  })

  it('1344513 is composite', () => {
    expect(millerRabin(1344513)).toBe(false)
  })

  it('179425579 is prime', () => {
    expect(millerRabin(179425579)).toBe(true)
  })
})
