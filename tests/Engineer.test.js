// const { exportAllDeclaration } = require('@babel/types');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

  // declare class
  const matt = new Engineer('Matt', 2, 'matt@gmail.com', 'mthomsn')

  // expected result
  it('Should return the name, id, email and github for an employee', () => {

    // tests
    expect(matt.name).toBe('Matt');
    expect(matt.id).toBe(2);
    expect(matt.email).toBe('matt@gmail.com');
    expect(matt.github).toBe('mthomsn');
    expect(matt.role).toBe('Engineer');
  });
})