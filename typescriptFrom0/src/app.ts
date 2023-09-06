// TYPE CASTING AND ASSERTATION----------------------DOM...........

type One = string;
type Two = string | number;
type Three = "hellow";

let a: One = "salom";
let b = a as Two; // less specific
let c = a as Three; // more specific

let d = <One>"world";
let e = <string | number>"world";

const addORconcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") return a + b;
  return "" + a + b;
};

let myVal: string = addORconcat(2, 3, "concat") as string;
// console.log(myVal);

// KeyOF and index Assertations

// interface TransctionObj {
//   readonly [index: string]: number;
// }

interface TransctionObj {
  readonly [index: string]: number;
  pizza: number;
  books: number;
  job: number;
}

const todaysTransc: TransctionObj = {
  pizza: -10,
  books: -5,
  job: 50,
  age: 30,
};

console.log(todaysTransc);

const todaysNet = (transc: TransctionObj): number => {
  let total = 0;
  for (const trans in transc) {
    total += transc[trans];
  }

  return total;
};

console.log(todaysNet(todaysTransc));
// todaysTransc.pizza = 40;

/////Much more examples KEYOF assertations and INDEX signature //////////////

interface Student {
  // [key: string]: string | number | number[] | undefinesd;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "suhrob",
  GPA: 4.31,
  classes: [100, 200],
};
// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`);
}

// GENERICS
// Utility types
