import generatePassword from '../passwordGenerator';

it('generate password is sending a string', () => {
    let result = generatePassword();
    expect(result).toHaveLength(15);
})