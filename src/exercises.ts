
// userObj2 = {
//   username: "suhrob",
//   age: 21,
//   isAdmin: true,
//   phone: "+998 99 0964865",
// };

// console.log(userObj2);

let sum = (num1: number, num2: number): void => {
  console.log(num1 + num2);
};

sum(1, 2);
// type alliases
let func = (user: { username: string; age: number; phone?: string }) => {
  console.log(user.username);
};

type user = {
  username: string;
  age: number;
  isAdmin: boolean;
  phone?: string;
};

let betterFunc = (user: user) => {
  console.log(user.username);
};

// function signature

type myFunc = (a: number, b: string) => void;

let write: myFunc = (num, str) => {
  console.log(num + " times" + str);
};

write(23, "hello");

type userType = {
  username: string;
  age: number;
  phone?: string;
  theme: "dark" | "light";
};

const userWithTheme: userType = {
  username: "suhrob",
  age: 21,
  theme: "dark",
};

console.log(userWithTheme);

// INTERFACES

interface IUser {
  username: string;
  email: string;
  age: number;
}

interface IEmployee extends IUser {
  employeeId: number;
}
const emp: IEmployee = {
  username: "tom",
  email: "tom@gmail.com",
  age: 21,
  employeeId: 222243,
};

const client: IUser = {
  username: "john",
  email: "john@gmail.com",
  age: 22,
};

// GENERICS

interface IAuthor {
  id: number;
  username: string;
}

interface ICategory {
  id: number;
  title: string;
}

interface Ipost {
  id: number;
  title: string;
  desc: string;
  extra: IAuthor[] | ICategory[];
}

// const postUser: Ipost ={
//     id: 222,
//     title: 'software engineer',
//     desc: 'Itransition employee',
// }

interface IPostBetter<T> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe: IPostBetter<String> = {
  id: 1,
  title: "software engineer",
  desc: "Itransition employee",
  extra: ["str1", "str2"],
};

interface iPostEvenBetter<T extends Object> {
  id: number;
  title: string;
  desc: string;
  extra: T[];
}

const testMe2: iPostEvenBetter<{ id: number; username: string }> = {
  id: 1,
  title: "software engineer",
  desc: "Itransition employee",
  extra: [{ id: 1, username: "john" }],
};

console.log(testMe2);


