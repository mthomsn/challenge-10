// const { exportAllDeclaration } = require('@babel/types');
// const { it } = require('node:test');
// const { describe } = require('yargs');
const Manager = require('../lib/Manager');

describe('Manager', () => {

  // declare class
  const matt = new Manager('Matt', 1, 'matt@gmail.com', 1)

  // expected result
  it('should return the manager name, id, email, and office', () => {

    // tests
    expect(matt.name).toBe('Matt');
    expect(matt.id).toBe(1);
    expect(matt.email).toBe('matt@gmail.com');
    expect(matt.office).toBe(1);
    expect(matt.role).toBe('Manager');
  })
})