// const { exportAllDeclaration } = require('@babel/types');
const Engineer = require('../lib/Engineer');

describe('Engineer', () => {

  // declare class
  const sam = new Engineer('Sam', 2, 'sam@gmail.com', 'sammi')

  // expected result
  it('Should return the name, id, email and github for an employee', () => {

    // tests
    expect(sam.name).toBe('Sam');
    expect(sam.id).toBe(2);
    expect(sam.email).toBe('sam@gmail.com');
    expect(sam.github).toBe('sammi');
    expect(sam.role).toBe('Engineer');
  });
})