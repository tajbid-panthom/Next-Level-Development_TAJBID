//generic constrains with keyof operator

type vehicle = {
  bike: string;
  car: string;
  ship: string;
};

type Owner = "bike" | "car" | "ship";
type Owner2 = keyof vehicle;

const person1: Owner2 = "bike";

const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
  return obj[key];
};
type User = {
  name: string;
  age: number;
  address: string;
};
const user1: User = {
  name: "Tajbid",
  age: 21,
  address: "Khulna University",
};
const result1 = getPropertyValue(user1, "name");
