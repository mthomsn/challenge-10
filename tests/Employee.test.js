// const { describe } = require('yargs');
// const { exportAllDeclaration } = require('@babel/types');
// const { it } = require('node:test');
const Employee = require('../lib/Employee');

describe('Employee', () => {
  const peter = new Employee('Peter', 4, 'peter@gmail.com');

  it('Should return the name, id, and email for an employee', () => {
    expect(peter.name).toBe('Peter');
    expect(peter.id).toBe(4);
    expect(peter.email).toBe('peter@gmail.com');
  });
})