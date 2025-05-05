{
  //inheritance

  class Person {
    constructor(
      public name: string,
      public age: number,
      public address: string
    ) {}
    getSleep(numOfHour: number) {
      return `${this.name} will sleep for ${numOfHour} hour`;
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }
  class Teacher extends Person {
    constructor(
      name: string,
      age: number,
      address: string,
      private designation: string
    ) {
      super(name, age, address);
    }

    takeClass(numOfClass: number) {
      return `${this.name} take ${numOfClass} classes`;
    }
  }
  const student1 = new Student("Tajbid", 21, "BD");
  console.log(student1.getSleep(10));
}
