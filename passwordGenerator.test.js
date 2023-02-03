"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwordGenerator_1 = __importDefault(require("./passwordGenerator"));
it('generate password is sending a string', () => {
    let result = (0, passwordGenerator_1.default)();
    expect(result).toHaveLength(15);
});
