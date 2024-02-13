class Robot {
    constructor(name = 'bot', health = 50, color ='grey', attack ='50'){
        this.name = name
        this.health = health
        this.color = color
        this.attack = attack
    }
    greet(){
        console.log(`hello i am ${this.name}`)
    }
    hit(enemy){
        enemy.health -= this.attack
    }
    hit(enemy){
        if(enemy.armor){
            enemy.health -= (this.attack + (.4 * this.speed)) - enemy.armor
        } else {
            enemy.health -= this.attack + (.4 * this.speed)
        }
        console.log(`${this.name} attacked ${enemy.name} their health is now ${enemy.health}`)
    }
}
class Autobots extends Robot {
    constructor(name, health, color, attack, speed){
        super(name, health, color, attack)
        this.speed = speed
    }
}
class Decepticon extends Robot {
    constructor(name, health, color, attack, armor){
        super(name, health, color, attack)
        this.armor = armor
    }
}

let megatron = new Decepticon('Megatron', 1000, 'machine metal grey', 200, 100)

let bumbleBee = new Autobots('BumbleBee', 300, 'yellow', 150, 300)

console.log(megatron)

console.log(bumbleBee)
