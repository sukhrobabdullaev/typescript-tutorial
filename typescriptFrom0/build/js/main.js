"use strict";
// basic types
const add = (a, b) => {
    return a + b;
};
console.log(add(34, "90"));
// objects, arrays,tuples and enums
let guitars = ["someone1", "someone2", 5250];
guitars[0] = 1984;
guitars.push(129);
console.log(guitars.length);
let test = [];
let bands = ["salom", "brand1"];
console.log(bands);
// tuple
let myTuple = ["dave", 42, true];
// myTuple.push(33)
// myTuple[3]='222'
let mixed = ["jon", 1, false];
// objects
let myObj;
myObj = [];
myObj = { name: "salom" };
const exampleOfObj = {
    prop1: "Dave",
    prop2: 40,
};
// exampleOfObj.prop1=23;
exampleOfObj.prop1 = "jon";
let evh = {
    name: "someone",
    active: false,
    albums: [1984, "monalisa", true],
};
// types in functions
const greetGuitarist = (guitaristBro) => {
    return `"hello", ${guitaristBro.name}`;
};
// enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 2] = "U";
    Grade[Grade["D"] = 3] = "D";
    Grade[Grade["C"] = 4] = "C";
    Grade[Grade["B"] = 5] = "B";
    Grade[Grade["A"] = 6] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
// literal types
let myName;
let userName;
userName = "dave";
{
    userName = "any";
    console.log(userName);
}
// FUNCTIONS
const add2 = (a, b) => {
    return a + b;
};
const logMessage = (message) => {
    console.log(message);
};
logMessage("hello");
logMessage(add2(2, 3));
let subtact = function (c, d) {
    return c - d;
};
// interface mathFunc {
//   (a: number, b: number): number;
// }
let mulTiply = function (c, d) {
    return c * d;
};
// REST OPERATORS
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
console.log(total(10, 2, 3));
const createErr = (errmsg) => {
    throw new Error(errmsg);
};
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        if (i > 100)
            break;
    }
};
const isNumber = (value) => {
    return typeof value === "number" ? true : false;
};
console.log(isNumber("333"));
// type never
const numberOrString = (value) => {
    if (typeof value === "string")
        return "string";
    return "somehting";
};
// TYPE CASTING AND ASSERTATION----------------------DOM...........
