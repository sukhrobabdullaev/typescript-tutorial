// greet='hello'
let greet3: Function;

greet3 = () => {
  console.log("hellow");
};

// default and optional params

const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c);
};
add(2, 3, "hello");

// function returns only numbers
const minus = (a: number, b: number): number => {
  return a - b;
};

console.log(minus(10, 2));
// function return only strings

const textToUpper = (text: string): string => text.toLowerCase();
console.log(textToUpper("SALOM"));
