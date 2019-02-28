const ask = require('readline-sync');

const user = {
    name: '',
    totalCoins: 0,
    status: "Small",
    hasStar: false,
    setName: () => {
        console.log("\nWhich Character would you like to be?")
        const names = ['Mario', 'Luigi']
        let x = 0
        for (let i = 0; i < 1; i++){
            x = ask.keyInSelect(names, '')
            if (x === -1){
                i--
            }
        }
        user.name = names[x] 
    },
    gotHit: () => {
        if (user.status === "Small"){
            user.status = "Dead";
            user.gameActive = false
        } else if (user.status === "Big"){
            user.status = "Small"
        } else if (user.status === "Powered Up"){
            user.status = "Big"
        }
    },
    gotPowerup: () => {
        if (user.status === "Small"){
            user.status = "Big"
        } else if (user.status === "Big"){
            user.status = "Powered Up"
        }
    },
    gameActive: true,
    addCoin: () => {
        user.totalCoins += 1
    },
    print: () => {
        console.log(`\nName: ${user.name}\nStatus: ${user.status}\nCoins: ${user.totalCoins}`)
    }
}


function game(){
    let x = Math.floor(Math.random() * 5)
    let z = Math.floor(Math.random() * 10)
    if (z === 0){
        console.log("You gained a star!");
        user.hasStar = true
    }
    if (x === 0){
        if(user.hasStar === true){
            console.log("Star Worked!")
            user.hasStar = false
        } else {
           user.gotHit()  
        }
    } else if (x === 1){
        user.gotPowerup()
    } else if (x === 2 || x === 4 || x === 3){
        user.addCoin()
    }
    if (user.gameActive === false){
        clearInterval(ID)
        console.log("\nGame Over")
    }

    user.print()
}


user.setName()
const ID = setInterval(game, 1000) 


    
