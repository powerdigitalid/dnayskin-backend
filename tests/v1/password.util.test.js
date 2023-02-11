const {passwordGen, passwordCompare} = require('../../src/v1/utils/password');

describe('passwordGen in password.js', () => { 
  it('should return a hash', () => {
    const password = 'password1';
    const hash = passwordGen(password);
    expect(passwordCompare(password, hash)).toBe(true); 
  });
 })