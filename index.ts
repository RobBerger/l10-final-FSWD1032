import User from "./user";

let mw: User = new User("Michael Weston");
let fg: User = new User("Fiona Glenanne");
let sa: User = new User("Sam Axe");
let mw2: User = new User("Madeline Westen");

let userArr: any[] = [mw, fg, sa, mw2];

userArr.forEach(function(usr) {
    let userPP = usr.prettyPrint();
    console.log(userPP);
});