const animalData = require('./animal-data.json');

class Animal {
    constructor(name, species, color, hunger = 50) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger
    }

    greet() {
        console.log(`Hi, I'm ${this.name} the ${this.species}`) 
    }

    feed() {
        this.hunger -= 20
        console.log("Yum, I love food")
    }
}

class Cat extends Animal {
    constructor (name, color, hunger) {
        super(name, 'cat', color, hunger)
        this.food = 'fish'
    }
    greet() {
        console.log(`Meow, I'm ${this.name} the ${this.species}`)
    }
    feed() {
        this.hunger -= 20;
        console.log(`Yum, I love ${this.food}`)
    }
}
class Dog extends Animal {
    constructor (name, color, hunger) {
        super(name, 'dog', color, hunger)
        this.food = 'kibble'
    }
    greet() {
        console.log(`Woof, I'm ${this.name} the ${this.species}`)
    }
    feed() {
        this.hunger -= 20;
        console.log(`Yum, I love ${this.food}`)
    }
}

class AnimalShelter {
    constructor() {
        this.animals = [];
    }

    addAnimal(animal) {
        this.animals.push(animal);
    }

    adopt(animal) {
        const animalIndex = this.animals.indexOf(animal)
        this.animals.splice(animalIndex, 1)
    }

    getAnimalsBySpecies(species) {
        return this.animals.filter(animal => animal.species === species)
    }
}

const shelter = new AnimalShelter ()
    //loop through animalData
    for (const a of animalData) {
        const hunger = a.hunger ? a.hunger : 50;
        const animal = new Animal(a.name, a.species, a.color, hunger)
        shelter.addAnimal(animal)   
    }
    
let scooby = new Dog('Scooby', 'brown')
let puss = new Cat('Puss', 'orange')

console.log(scooby)
console.log(puss)