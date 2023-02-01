"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./user"));
let mw = new user_1.default("Michael Weston");
let fg = new user_1.default("Fiona Glenanne");
let sa = new user_1.default("Sam Axe");
let mw2 = new user_1.default("Madeline Westen");
let userArr = [mw, fg, sa, mw2];
userArr.forEach(function (usr) {
    let userPP = usr.prettyPrint();
    console.log(userPP);
});
