{
  //instanceof guard

  class Animal {
    constructor(public name: string, public species: string) {}
    makeSound() {
      console.log("I am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("I am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMeow() {
      console.log("I am meowing");
    }
  }

  //smart way to handle the instanceof

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };
  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMeow();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Dog Vai", "dog");
  const cat = new Cat("Cat Vai", "cat");

  getAnimal(dog);
  getAnimal(cat);
}
