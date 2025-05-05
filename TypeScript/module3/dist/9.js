"use strict";
//abstraction 1.interface 2.abstract class
const vehicle1 = {
    startEngine: () => console.log("Engine started"),
    stopEngine: () => console.log("Engine stopped"),
    move: () => console.log("Moving"),
};
class Car {
    startEngine() {
        console.log("Car engine started");
    }
    stopEngine() {
        console.log("Car engine stopped");
    }
    move() {
        console.log("Car is moving");
    }
    test() {
        console.log("I am testing");
    }
}
class Vehicle2 {
    startEngine() {
        console.log("Car engine started");
    }
    stopEngine() {
        console.log("Car engine stopped");
    }
    move() {
        console.log("Car is moving");
    }
    test() {
        console.log("I am testing");
    }
}
class Car2 extends Vehicle2 {
    running() {
        console.log("Car is running");
    }
}
const car2 = new Car2();
car2.startEngine();
car2.running();
