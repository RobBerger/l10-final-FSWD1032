import randomstring from 'randomstring';

function generatePassword() {
    let newPass = randomstring.generate(15);
    return newPass;
};

export default generatePassword