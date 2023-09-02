// explicit types

let character: string = "suhrob";
let age: number = 21;
let isLogged: boolean = true;
console.log(character, age, isLogged);

// arrays
let names: string[] = [];
names.push("ok");

// union types - mixed types
let mixed: (string | number | boolean)[] = [33, "233", true];
console.log(mixed);

let uuid: string | number;

// objects
let myObj: object;

myObj = {
  name: "yoshu",
  age: 21,
};

let myObj2: {
  name: string;
  age: number;
  isLogged?: boolean;
  myArr: (string | number)[];
};

myObj2 = { name: "sukhrob", age: 21, myArr: [22, "333"] };
