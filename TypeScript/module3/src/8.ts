{
  //polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep(): void {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }
  class Developer extends Person {
    getSleep(): void {
      console.log(`I am sleeping for 5 hours per day`);
    }
  }

  const getSleepingHours = (person: Person) => {
    person.getSleep();
  };
  const p1 = new Person();
  const p2 = new Student();
  const p3 = new Developer();

  getSleepingHours(p1);
  getSleepingHours(p2);
  getSleepingHours(p3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }
  class Circle extends Shape {
    constructor(public r: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.r * this.r;
    }
  }
  class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
      super();
    }
    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShape = (param: Shape) => {
    console.log(param.getArea());
  };

  getShape(new Shape());
  getShape(new Circle(3));
  getShape(new Rectangle(3, 4));
}
