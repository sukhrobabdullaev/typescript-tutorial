"use strict";
// example 1
let greetings;
greetings = (name, greeting) => {
    console.log(name + " says" + greeting);
};
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example 3
let logDetails2;
logDetails2 = (ninja) => {
    console.log(ninja.name + ninja.age);
};
