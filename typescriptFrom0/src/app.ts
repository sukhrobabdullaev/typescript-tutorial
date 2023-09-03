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
console.log(myVal);
