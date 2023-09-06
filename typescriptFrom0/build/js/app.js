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
const todaysTransc = {
    pizza: -10,
    books: -5,
    job: 50,
    age: 30,
};
console.log(todaysTransc);
const todaysNet = (transc) => {
    let total = 0;
    for (const trans in transc) {
        total += transc[trans];
    }
    return total;
};
console.log(todaysNet(todaysTransc));
const student = {
    name: "suhrob",
    GPA: 4.31,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// GENERICS
// Utility types
