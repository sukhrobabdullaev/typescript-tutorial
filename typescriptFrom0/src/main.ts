// basic types

const add = (a: number, b: string) => {
  return a + b;
};

console.log(add(34, "90"));

// objects, arrays,tuples and enums

let guitars = ["someone1", "someone2", 5250];
guitars[0] = 1984;

guitars.push(129);
console.log(guitars.length);

let test = [];
let bands: string[] = ["salom", "brand1"];
console.log(bands);

// tuple
let myTuple: [string, number, boolean] = ["dave", 42, true];
// myTuple.push(33)
// myTuple[3]='222'
let mixed = ["jon", 1, false];

// objects
let myObj: object;
myObj = [];
myObj = { name: "salom" };

const exampleOfObj = {
  prop1: "Dave",
  prop2: 40,
};

// exampleOfObj.prop1=23;
exampleOfObj.prop1 = "jon";

interface guitarist {
  name?: string;
  active: boolean;
  albums: (string | number | boolean)[];
}

let evh: guitarist = {
  name: "someone",
  active: false,
  albums: [1984, "monalisa", true],
};

// types in functions

const greetGuitarist = (guitaristBro: guitarist) => {
  return `"hello", ${guitaristBro.name}`;
};

// enums

enum Grade {
  U=2,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
