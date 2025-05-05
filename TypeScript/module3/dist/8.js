"use strict";
{
    //polymorphism
    class Person {
        getSleep() {
            console.log(`I am sleeping for 8 hours per day`);
        }
    }
    class Student extends Person {
        getSleep() {
            console.log(`I am sleeping for 7 hours per day`);
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log(`I am sleeping for 5 hours per day`);
        }
    }
    const getSleepingHours = (person) => {
        person.getSleep();
    };
    const p1 = new Person();
    const p2 = new Student();
    const p3 = new Developer();
    getSleepingHours(p1);
    getSleepingHours(p2);
    getSleepingHours(p3);
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Circle extends Shape {
        constructor(r) {
            super();
            this.r = r;
        }
        getArea() {
            return Math.PI * this.r * this.r;
        }
    }
    class Rectangle extends Shape {
        constructor(height, width) {
            super();
            this.height = height;
            this.width = width;
        }
        getArea() {
            return this.height * this.width;
        }
    }
    const getShape = (param) => {
        console.log(param.getArea());
    };
    getShape(new Shape());
    getShape(new Circle(3));
    getShape(new Rectangle(3, 4));
}
