"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passwordGenerator_1 = __importDefault(require("./passwordGenerator"));
const dateMaker_1 = __importDefault(require("./dateMaker"));
console.log((0, dateMaker_1.default)());
console.log((0, passwordGenerator_1.default)());
