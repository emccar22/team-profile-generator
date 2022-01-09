const Intern = require('../lib/Intern');

test('creates intern object', () => {
    const intern = new Intern('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number))
    expect(intern.email).toEqual(expect.any(String));
});

test('gets intern name', () => {
    const intern = new Intern('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');

    expect(intern.getName()).toEqual(expect.any(String));
});

test('gets intern id', () => {
    const intern = new Intern('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');
    
    expect(intern.getId()).toEqual(expect.any(Number));
});

test('gets intern email', () => {
    const intern = new Intern('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test('gets intern role', () => {
    const intern = new Intern('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');

    expect(intern.getRole()).toEqual('Intern');
});

test('gets intern school', () => {
    const intern = new Intern('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});
