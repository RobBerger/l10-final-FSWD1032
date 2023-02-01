"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwordGenerator_1 = __importDefault(require("./passwordGenerator"));
const dateMaker_1 = __importDefault(require("./dateMaker"));
function randomNumberLimiter(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function generateUserId() {
    return randomNumberLimiter(1000, 9999);
}
class User {
    constructor(objUsername) {
        this.userId = generateUserId();
        this.password = (0, passwordGenerator_1.default)();
        this.createdDate = (0, dateMaker_1.default)();
        this.username = objUsername;
    }
    prettyPrint() {
        return `---\n\nID: ${this.userId}\nUsername: ${this.username}\nPassword: ${this.password}\nCreated On: ${this.createdDate}`;
    }
}
let mw = new User("Michael Weston");
console.log(mw.prettyPrint());
