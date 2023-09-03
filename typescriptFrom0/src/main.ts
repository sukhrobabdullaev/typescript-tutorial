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
  U = 2,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);

// type aliases

type strOrNum = string | number;

type stringOrArr = (string | number)[];

type GuitariST = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};

type userId = strOrNum;

// literal types

let myName: "dave";
let userName: "dave" | "john" | "any";
userName = "dave";

{
  userName = "any";
  console.log(userName);
}

// FUNCTIONS
const add2 = (a: number, b: number): number => {
  return a + b;
};

const logMessage = (message: any): void => {
  console.log(message);
};

logMessage("hello");
logMessage(add2(2, 3));

let subtact = function (c: number, d: number): number {
  return c - d;
};

// function signature
type mathFunc = (a: number, b: number) => number;
// interface mathFunc {
//   (a: number, b: number): number;
// }

let mulTiply: mathFunc = function (c, d) {
  return c * d;
};

// REST OPERATORS
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

console.log(total(10, 2, 3));

const createErr = (errmsg: string): never => {
  throw new Error(errmsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
    if (i > 100) break;
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

console.log(isNumber("333"));
// type never
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  return "somehting";
};

// TYPE CASTING AND ASSERTATION----------------------DOM...........
