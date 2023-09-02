interface isPerson {
  name: string;
  age?: number;
  speak?(a: string): void;
  spend?(b: number): number;
}

const me: isPerson = {
  name: "suhrob",
  age: 21,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

console.log(me);

const greetPerson = (person: isPerson) => {
  console.log("hello", person.name);
};

greetPerson({name: 'suhrob bro'})
