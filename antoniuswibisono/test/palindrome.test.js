const chai = require('chai');
const expect = chai.expect;
const checkPalindrome = require('../palindrome');

describe('Testing Palindrome function', () => {
  it('should return true if param is palindrome', () => {
    const param = 'adida'
    const result = checkPalindrome(param);
    expect(result).to.equal(true)
  });
  it('should return false if param is not palindrome', () => {
    const param = 'adidas'
    const result = checkPalindrome(param);
    expect(result).to.equal(false)
  });
});