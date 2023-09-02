type strOrNum = string | number;
type objWithName = { name: string; uid: strOrNum };
const logDetails = (uuid: strOrNum, item: string) => {
  console.log(`${item} has a uuid of ${uuid}`);
};
logDetails(2434,'233')

const greeting = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};

