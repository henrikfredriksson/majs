const gcd = require('../src/gcd/')

describe('Test module gcd', () => {
  it('Greatest common divisior beteween 48 and 12 is 12 ', () => {
    expect(gcd(48, 12)).toEqual(12)
  })

  it('Greatest common divisior beteween 6 and 9 is 3 ', () => {
    expect(gcd(6, 9)).toEqual(3)
  })

  it('Greatest common divisior beteween 5 and 0 is 5 ', () => {
    expect(gcd(5, 0)).toEqual(5)
  })
})
