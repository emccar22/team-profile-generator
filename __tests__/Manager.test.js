const Manager = require('../lib/Manager');

test('creates manager object', () => {
    const manager = new Manager('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number))
    expect(manager.email).toEqual(expect.any(String));
});

test('gets manager name', () => {
    const manager = new Manager('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');

    expect(manager.getName()).toEqual(expect.any(String));
});

test('gets manager id', () => {
    const manager = new Manager('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');
    
    expect(manager.getId()).toEqual(expect.any(Number));
});

test('gets manager email', () => {
    const manager = new Manager('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test('gets manager role', () => {
    const manager = new Manager('Eddie', 1, 'e.mccaarthy2285@gmail.com', 'Rutgers');

    expect(manager.getRole()).toEqual('Manager');
});

