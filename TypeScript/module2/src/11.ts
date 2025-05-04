{
  //utility type

  //pick
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  type nameAge = Pick<Person, keyof Person>;

  type ContactInfo = Omit<Person, "age" | "name">;

  //required

  type PersonRequired = Required<Person>;

  type PersonPertial = Partial<Person>;

  const person1: Person = {
    name: "tajbid",
    age: 25,
    contactNo: "01712345678",
  };

  person1.name = "hossain";

  type PersonReadOnly = Readonly<Person>;
  const person2: PersonReadOnly = {
    name: "tajbid",
    age: 25,
    contactNo: "01712345678",
  };

  //record type

  type MyObj = Record<string, string>;
  const EmptyObj: Record<string, undefined> = {};
  // const obj1: MyObj = {
  //   name: "tajbid",
  //   age: "25",
  //   contactNo: "01712345678",
  // };
}
