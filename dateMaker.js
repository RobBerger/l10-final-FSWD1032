"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moment_1 = __importDefault(require("moment"));
function generateDate() {
    let newDate = (0, moment_1.default)().format('LLLL');
    return newDate;
}
exports.default = generateDate;
