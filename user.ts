import generatePassword from './passwordGenerator'
import generateDate from './dateMaker'

function randomNumberLimiter(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function generateUserId(): number {
    return randomNumberLimiter(1000, 9999)
}

class User {
    userId: number = generateUserId();
    username: string;
    password: string = generatePassword();
    createdDate: string = generateDate();

    constructor(objUsername: string) {
        this.username = objUsername;
    }

    prettyPrint(): string {
        return `---\nID: ${this.userId}\nUsername: ${this.username}\nPassword: ${this.password}\nCreated On: ${this.createdDate}\n`
    }
}

export default User