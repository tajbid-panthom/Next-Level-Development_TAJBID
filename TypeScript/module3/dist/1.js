"use strict";
{
    //class
    class Animal {
        //   private name: string;
        //   private species: string;
        //   private sound: string;
        //parameter properties
        constructor(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            // this.name = name;
            // this.species = species;
            // this.sound = sound;
        }
        makeSound() {
            return this.sound;
        }
    }
    const dog = new Animal("German Sheped", "Dog", "bark");
    const cat = new Animal("Persian ", "Cat", "meow");
    console.log(dog.makeSound());
}
