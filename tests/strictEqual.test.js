const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../strictEqual')


describe('strictEqualFile', () => {
  describe('strictEqual()', () => {
    it('returns true when the types and values are both the same (number)', () => {
      const numOne = 5
      const numTwo = 5
      const result = strictEqual(numOne, numTwo)
      expect(result).to.equal(true)
    })
    it('returns false when types are the same but values are not the same', () => {
      const numOne = 6
      const numTwo = 9
      const result = strictEqual(numOne, numTwo)
      expect(result).to.equal(false)
    })
    it('returns false when types are not the same, but values are the same', () => {
      const numOne = 3
      const numTwo = '3'
      const result = strictEqual(numOne, numTwo)
      expect(result).to.equal(false)
    })
    it('returns false when neither the types nor the values are the same', () => {
      const numOne = 7
      const numTwo = '8'
      const result = strictEqual(numOne, numTwo)
      expect(result).to.equal(false)
    })
  })
})
