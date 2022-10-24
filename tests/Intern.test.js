const Intern = require('../lib/Intern');

describe('Intern', () => {

  // declare class
  const minou = new Intern('Minou', 3, 'minou@gmail.com', 'Oxford');

  // expected result
  it('Should return the name, id, email and school for an intern', () => {
    
    // tests
    expect(minou.name).toBe('Minou');
    expect(minou.id).toBe(3);
    expect(minou.email).toBe('minou@gmail.com');
    expect(minou.school).toBe('Oxford');
    expect(minou.role).toBe('Intern');
  });
})