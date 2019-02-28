class Parties {
    constructor(name) {
        this.name = name
        this.population = 10000
    }
    sendNuke(party){
        let x = Math.floor(Math.random() * 2)
        if (x === 0){
            hit(party)
        } else {
            miss(party)
        }
    }
    print(){
        console.log(`\nName: ${this.name}\nPopulation: ${this.population}`)
    }
}
const hit = target => {
    let x = Math.floor(Math.random() * 1000) + 1000
    let {name} = target
    target.population -= x
    console.log(`\n[ Nuke was successful! You killed ${x} ${name}! ]`)
    target.print()
}
const miss = target => {
    let x = Math.floor(Math.random() * 100) + 100
    let {name} = target
    target.population += x
    console.log(`\n[ Nuke missed the target... ${name}' population was allowed to grow by ${x} people! ]`)
    target.print()
}
const penguins = new Parties("Penguins")
const communists = new Parties("Communists")
const num = Math.floor(Math.random() * 2)

const game = () => {
    if (communists.population <= 0 || penguins.population <= 0){
        clearInterval(ID)
        console.log(num)
    }
    if (num === 0){
        communists.sendNuke(penguins)
        setTimeout(() => {penguins.sendNuke(communists)}, 25)
        
    } else if (num === 1){
        penguins.sendNuke(communists)
        setTimeout(() => {communists.sendNuke(penguins)}, 25)
    }
}


const ID = setInterval(game, 50)