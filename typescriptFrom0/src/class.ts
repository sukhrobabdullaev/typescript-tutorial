class Coder {
  //   music: string;
  //   age: number;
  //   lang: string;

  secondLang!: string; // assertation

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang?: string
  ) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }

  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42, "TypeScript");
console.log(Dave.getAge());
console.log(Dave.music);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }

  public getLang() {
    return `I write ${this.lang}`;
  }
}

const Sara = new WebDev("Mac", "Sara", "Lofi", 25);
console.log(Sara.getLang());
// console.log(Sara.name);

//////////////////////////////////////////////
interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist3 implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Page = new Guitarist3("Jimmy", "guitar");

console.log(Page.play("strum"));

// ////////////////////////////////////////////////////
class Peeps {
  static count: number = 0;

  static getCount(): number {
    return Peeps.count;
  }
}
