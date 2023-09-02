"use strict";
const me = {
    name: "suhrob",
    age: 21,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I spent", amount);
        return amount;
    },
};
console.log(me);
const greetPerson = (person) => {
    console.log("hello", person.name);
};
greetPerson({ name: 'suhrob bro' });
