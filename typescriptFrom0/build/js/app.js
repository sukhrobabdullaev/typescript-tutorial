"use strict";
// TYPE CASTING AND ASSERTATION----------------------DOM...........
let a = "salom";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addORconcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addORconcat(2, 3, "concat");
console.log(myVal);
