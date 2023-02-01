"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwordGenerator_1 = __importDefault(require("./passwordGenerator"));
class User {
    constructor(objUserId, objUsername, objCreatedDate) {
        this.password = (0, passwordGenerator_1.default)();
        this.username = objUsername;
        this.userId = objUserId;
        this.createdDate = objCreatedDate;
    }
    prettyPrint() {
        return `---\n\nID: ${this.userId}\nUsername: ${this.username}\nPassword: ${this.password}\nCreated On: ${this.createdDate}`;
    }
}
let mw = new User(1111, "Michael Weston", "today");
console.log(mw.prettyPrint());
