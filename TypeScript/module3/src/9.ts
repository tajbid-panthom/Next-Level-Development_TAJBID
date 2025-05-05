{
  //abstraction 1.interface 2.abstract class

  interface Vehicle1 {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  const vehicle1: Vehicle1 = {
    startEngine: () => console.log("Engine started"),
    stopEngine: () => console.log("Engine stopped"),
    move: () => console.log("Moving"),
  };

  class Car implements Vehicle1 {
    startEngine(): void {
      console.log("Car engine started");
    }
    stopEngine(): void {
      console.log("Car engine stopped");
    }
    move(): void {
      console.log("Car is moving");
    }

    test() {
      console.log("I am testing");
    }
  }

  abstract class Vehicle2 {
    abstract startEngine(): void;
    stopEngine(): void {
      console.log("Car engine stopped");
    }
    move(): void {
      console.log("Car is moving");
    }

    test() {
      console.log("I am testing");
    }
  }
  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log("Car engine started");
    }
    running() {
      console.log("Car is running");
    }
  }
  const car2 = new Car2();

  car2.startEngine();
  car2.running();
}
