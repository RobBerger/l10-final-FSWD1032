"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const randomstring_1 = __importDefault(require("randomstring"));
function generatePassword() {
    let newPass = randomstring_1.default.generate(15);
    return newPass;
}
;
exports.default = generatePassword;
