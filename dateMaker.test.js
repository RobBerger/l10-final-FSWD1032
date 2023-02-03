"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dateMaker_1 = __importDefault(require("./dateMaker"));
const moment_1 = __importDefault(require("moment"));
describe('dateMaker', () => {
    it('generateDate is makeing dates', () => {
        let result = (0, dateMaker_1.default)();
        expect(result).toEqual((0, moment_1.default)().format('LLLL'));
    });
});
