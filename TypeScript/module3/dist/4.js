"use strict";
{
    //instanceof guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("I am barking");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeow() {
            console.log("I am meowing");
        }
    }
    //smart way to handle the instanceof
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeow();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Dog Vai", "dog");
    const cat = new Cat("Cat Vai", "cat");
    getAnimal(dog);
    getAnimal(cat);
}
