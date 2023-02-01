import generatePassword from './passwordGenerator'
import generateDate from './dateMaker'

class User {
    userId: number;
    username: string;
    password: string = generatePassword();
    createdDate: string;

    constructor(objUserId: number, objUsername: string, objCreatedDate: string) {
        this.username = objUsername;
        this.userId = objUserId;
        this.createdDate = objCreatedDate;
    }

    prettyPrint(): string {
        return `---\n\nID: ${this.userId}\nUsername: ${this.username}\nPassword: ${this.password}\nCreated On: ${this.createdDate}`
    }
}

let mw: User = new User(1111, "Michael Weston", "today");

console.log(mw.prettyPrint());