"use strict";
// userObj2 = {
//   username: "suhrob",
//   age: 21,
//   isAdmin: true,
//   phone: "+998 99 0964865",
// };
// console.log(userObj2);
let sum = (num1, num2) => {
    console.log(num1 + num2);
};
sum(1, 2);
// type alliases
let func = (user) => {
    console.log(user.username);
};
let betterFunc = (user) => {
    console.log(user.username);
};
let write = (num, str) => {
    console.log(num + " times" + str);
};
write(23, "hello");
const userWithTheme = {
    username: "suhrob",
    age: 21,
    theme: "dark",
};
console.log(userWithTheme);
const emp = {
    username: "tom",
    email: "tom@gmail.com",
    age: 21,
    employeeId: 222243,
};
const client = {
    username: "john",
    email: "john@gmail.com",
    age: 22,
};
const testMe = {
    id: 1,
    title: "software engineer",
    desc: "Itransition employee",
    extra: ["str1", "str2"],
};
const testMe2 = {
    id: 1,
    title: "software engineer",
    desc: "Itransition employee",
    extra: [{ id: 1, username: "john" }],
};
console.log(testMe2);
