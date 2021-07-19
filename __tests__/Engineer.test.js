const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('Praise');

    expect(engineer.name).toBe('Praise');
});

test('gets github as an object', () => {
    const engineer = new Engineer('Praise');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.name.toString()));
})