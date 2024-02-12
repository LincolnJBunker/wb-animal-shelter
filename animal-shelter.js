const animalData = require('./animal-data.json');

class Animal {
    constructor (name, species, color, hunger = 50) {
        this.name = name;
        this.species = species;
        this.color = color;
        this.hunger = hunger
    }

    greetMethod() {
        console.log(`Hi, I'm ${this.name} the ${this.species}`) 
    }

    feedMethod() {
        this.hunger -= 20
        console.log("Yum, I love food")
    }
}