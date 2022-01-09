const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'emccar22');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number))
    expect(engineer.email).toEqual(expect.any(String));
});

test('gets engineer name', () => {
    const engineer = new Engineer('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'emccar22');

    expect(engineer.getName()).toEqual(expect.any(String));
});

test('gets engineer id', () => {
    const engineer = new Engineer('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'emccar22');
    
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('gets engineer email', () => {
    const engineer = new Engineer('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'emccar22');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test('gets engineer role', () => {
    const engineer = new Engineer('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'emccar22');

    expect(engineer.getRole()).toEqual('Engineer');
});

test('gets engineer github', () => {
    const engineer = new Engineer('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'emccar22');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});
