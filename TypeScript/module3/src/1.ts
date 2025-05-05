{
  //class

  class Animal {
    //   private name: string;
    //   private species: string;
    //   private sound: string;

    //parameter properties

    constructor(
      private name: string,
      private species: string,
      private sound: string
    ) {
      // this.name = name;
      // this.species = species;
      // this.sound = sound;
    }
    makeSound(): string {
      return this.sound;
    }
  }

  const dog = new Animal("German Sheped", "Dog", "bark");
  const cat = new Animal("Persian ", "Cat", "meow");

  console.log(dog.makeSound());
}
