"use strict";
{
    //inheritance
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHour) {
            return `${this.name} will sleep for ${numOfHour} hour`;
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
        takeClass(numOfClass) {
            return `${this.name} take ${numOfClass} classes`;
        }
    }
    const student1 = new Student("Tajbid", 21, "BD");
    console.log(student1.getSleep(10));
}
