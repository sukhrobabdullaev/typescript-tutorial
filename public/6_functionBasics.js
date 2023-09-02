"use strict";
// greet='hello'
let greet3;
greet3 = () => {
    console.log("hellow");
};
// default and optional params
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
add(2, 3, "hello");
// function returns only numbers
const minus = (a, b) => {
    return a - b;
};
console.log(minus(10, 2));
// function return only strings
const textToUpper = (text) => text.toLowerCase();
console.log(textToUpper("SALOM"));
