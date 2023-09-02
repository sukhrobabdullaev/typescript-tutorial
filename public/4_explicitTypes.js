"use strict";
// explicit types
let character = "suhrob";
let age = 21;
let isLogged = true;
console.log(character, age, isLogged);
// arrays
let names = [];
names.push("ok");
// union types - mixed types
let mixed = [33, "233", true];
console.log(mixed);
let uuid;
// objects
let myObj;
myObj = {
    name: "yoshu",
    age: 21,
};
let myObj2;
myObj2 = { name: "sukhrob", age: 21, myArr: [22, "333"] };
