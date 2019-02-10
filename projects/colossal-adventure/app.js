let ask = require('readline-sync');

 //////////////////////
// Global Variables //
let playerStats = {
    name: "",
    exp: 0,
    lvl: 1,
    money: 0,
    health: 100,
    totalMagicDefence: 0,
    totalMeleeDefence: 0,
    magicAttack: 0,
    meleeAttack: 0,
    head: {
        name: "",
        magicAttackBonus: 0,
        magicDefenceBonus: 0,
        meleeDefenceBonus: 0,
    },
    body: {
        name: "",
        magicAttackBonus: 0,
        magicDefenceBonus: 0,
        meleeDefenceBonus: 0,
    },
    shoes: {       
        name: "",
        magicAttackBonus: 0,
        magicDefenceBonus: 0,
        meleeDefenceBonus: 0,
    },
    gloves: {
        name: "",
        magicAttackBonus: 0,
        magicDefenceBonus: 0,
        meleeDefenceBonus: 0,
    },
    rightArm: {
        name: "",
        meleeAttackBonus: 0,
        magicAttackBonus: 0,
    },
    leftArm: {
        name: "",
        meleeAttackBonus: 0,
        magicAttackBonus: 0,
    },
    inventory: {
        weapons: [
            {name: "Bronze Sword", meleeAttackBonus: 15, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 0},
            {name: "Iron Sword", meleeAttackBonus: 20, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 0},
            {name: "Wand of Elm", meleeAttackBonus: 0, magicAttackBonus: 5, magicDefenceBonus: 0, meleeDefenceBonus: 0},
            {name: "Staff of Elm", meleeAttackBonus: 0, magicAttackBonus: 10, magicDefenceBonus: 0, meleeDefenceBonus: 0},
        ],
        headWear: [
            {name: "Bronze Helmet", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 10},
        ],
        bodyWear: [
            {name: "Bronze Chest Plate", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 15},
        ],
        footWear: [
            {name: "Bronze Boots", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 10},
        ],
        handWear: [
            {name: "Bronze Gaunlets", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 5},
        ],
        healthPotions: [],
        magicScrolls: []
    }
}
let meleeStrength = 15;
let magicStrength = 10;
let originalMagicDefence = 0;
let originalMeleeDefence = 0;
const armObj = {
    name: "",
    meleeAttackBonus: 0,
    magicAttackBonus: 0,
}
const armorObj = {
    name: "",
    magicAttackBonus: 0,
    magicDefenceBonus: 0,
    meleeDefenceBonus: 0,
}

/////////////////////
// Game Functions //
updatePlayerInfo()

// Update Info
// Adds the melee attack bonus to the melee attack
function addMeleeAttackBonus(armRight, armLeft){
    playerStats.meleeAttack = meleeStrength 
    + armRight.meleeAttackBonus 
    + armLeft.meleeAttackBonus 
}
// Adds the magic attack bonus to the magic attack
function addMagicAttackBonus(armLeft, armRight, body, shoes, gloves, head){
    playerStats.magicAttack = magicStrength 
    + armLeft.magicAttackBonus
    + armRight.magicAttackBonus 
    + body.magicAttackBonus 
    + shoes.magicAttackBonus 
    + gloves.magicAttackBonus 
    + head.magicAttackBonus
}
// Adds magic defence together
function addMagicDefenceBonus(body, shoes, gloves, head){
    playerStats.totalMagicDefence = originalMagicDefence 
    + body.magicDefenceBonus 
    + shoes.magicDefenceBonus 
    + gloves.magicDefenceBonus 
    + head.magicDefenceBonus
}
// Adds melee defence together
function addMeleeDefenceBonus(body, shoes, gloves, head){
    playerStats.totalMeleeDefence = originalMeleeDefence 
    + body.meleeDefenceBonus
    + shoes.meleeDefenceBonus 
    + gloves.meleeDefenceBonus 
    + head.meleeDefenceBonus
}
// Updates the player info
function updatePlayerInfo(){
    let x = playerStats
    let r = x.rightArm
    let l = x.leftArm
    let g = x.gloves
    let s = x.shoes
    let h = x.head
    let b = x.body
    addMeleeAttackBonus(r, l)
    addMagicAttackBonus(r, l, b, s, g, h)
    addMagicDefenceBonus(b, s, g, h)
    addMeleeDefenceBonus(b, s, g, h)
}


// Print Player Info
function printStats(){
    console.log("______________________________________________________________________________________________________________________")
    console.log("--------------------------------------------")
    let x = playerStats
    let y = x.inventory
    console.log('\n\t\t"' + x.name + '"')
    console.log("\n\tEXP: " + x.exp + "\t\tCC: $" + x.money)
    console.log("\tLVL: " + x.lvl + "\t\tHP: " + x.health)
    console.log("----------------------------------------------")
    console.log("\n(Magic Defence: " + x.totalMagicDefence + "\tMagic Attack: " + x.magicAttack + ")")
    console.log("(Melee Defence: " + x.totalMeleeDefence + "\tMelee Attack: " + x.meleeAttack + ")\n")
    console.log("--------------------------------------------")
    console.log("Equipped Items:")
    if (x.head.name != ""){
        let x = playerStats.head
        console.log("\nHead: ")
        console.log("\t" + x.name)
        //LOOP through stats
        loopEquipItem(x)
    }
    if (x.body.name != ""){
        let x = playerStats.body
        console.log("\nBody: ")
        console.log("\t" + x.name)
        loopEquipItem(x)
        // console.log(x)
    }
    if (x.shoes.name != ""){
        let x = playerStats.shoes
        console.log("\nShoes: ")
        console.log("\t" + x.name)
        loopEquipItem(x)
    }
    if (x.gloves.name != ""){
        let x = playerStats.gloves
        console.log("\nGloves: ")
        console.log("\t" + x.name)
        loopEquipItem(x)
    }
    if (x.rightArm.name != ""){
        let x = playerStats.rightArm
        console.log("\nRight Arm: ")
        console.log("\t" + x.name)
        loopEquipItem(x)
    }
    if (x.leftArm.name != ""){
        let x = playerStats.leftArm
        console.log("\nLeft Arm: ")
        console.log("\t" + x.name)
        loopEquipItem(x)
    }
    console.log("--------------------------------------------")
    console.log("Inventory: \n")
    console.log("\tWeapons: " + y.weapons.length)
    console.log("\tHead Wear: " + y.headWear.length)
    console.log("\tBody Wear: " + y.bodyWear.length)
    console.log("\tFoot Wear: " + y.footWear.length)
    console.log("\tHand Wear: " + y.handWear.length)
    console.log("\tHealth Potions: " + y.healthPotions.length)
    console.log("\tMagic Scrolls: " + y.magicScrolls.length)
    console.log("\n--------------------------------------------")
} 

// Loop Through Equipped Items stats
function loopEquipItem(equipItem){
    let x = equipItem
    let magA = x.magicAttackBonus
    let magD = x.magicDefenceBonus
    let melA = x.meleeAttackBonus
    let melD = x.meleeDefenceBonus
    if (magA != 0){
        console.log("\t\tMagic ATT: " + magA)
    }
    if (magD != 0){
        console.log("\t\tMagic DEF: " + magD)
    }
    if (melA != 0){
        console.log("\t\tMelee ATT: " + melA)
    }
    if (melD != 0){
        console.log("\t\tMelee DEF: " + melD)
    } 
}

// Print PLayer Inventory Stats in Detail
function printInventoryStats(inventoryName){
    console.log("______________________________________________________________________________________________________________________")
    let z = playerStats
    console.log("--------------------------------------------")
    console.log("\n(Magic Defence: " + z.totalMagicDefence + "\tMagic Attack: " + z.magicAttack + ")")
    console.log("(Melee Defence: " + z.totalMeleeDefence + "\tMelee Attack: " + z.meleeAttack + ")\n")
    console.log("--------------------------------------------")
    // Equipped items 
    console.log("--------------------------------------------")
    let x = inventoryName
    let y = z.inventory
    console.log("\nInventory: ")
    if (x === y.weapons){
        console.log("\tWeapons: ")
    } else if (x === y.headWear){
        console.log("\tHead Wear: ")
    } else if (x === y.body){
        console.log("\Body Wear: ")
    } else if (x === y.handWear){
        console.log("\tHand Wear: ")
    } else if (x === y.footWear){
        console.log("\tFoot Wear: ")
    } else if (x === y.healthPotions){
        console.log("\Health Potions: ")
    } else if (x === y.magicScrolls){
        console.log("\tMagic Scrolls: ")
    }
    if(x.length != 0){
        for (let i = 0; i < x.length; i++){
            console.log("\n\t" + x[i].name)
            loopEquipItem(x[i])
        } 
    } else {
        console.log('\n\t"Nothing is this Inventory"\n')
    }
    console.log("\n--------------------------------------------")
}


// Adds the original weapon from the selected arm and places back to the inventory
function unequipArm(arm){
    if (arm.name != ""){
        let origWep = arm
        x.inventory.weapons.push(origWep)
        if (arm.length)
        arm = armObj
        updatePlayerInfo()
    }
}

// Right Arm Equip
function addNewWeaponRightArm(num){
    let y = playerStats.inventory.weapons
    playerStats.rightArm = y[num];
    y.splice(num, 1)
}
function equipRightArm(num){
    let x = playerStats.rightArm
    unequipArm(x);
    addNewWeaponRightArm(num);
    updatePlayerInfo()
}

// Left Arm Equip
function addNewWeaponLeftArm(num){
    let y = playerStats.inventory.weapons
    playerStats.leftArm = y[num];
    y.splice(num, 1)
}
function equipLeftArm(num){
    let arm = playerStats.leftArm
    unequipArm(arm);
    addNewWeaponLeftArm(num);
    updatePlayerInfo()
}

// Unequip armor by type and inventory type
function unequipArmor(armorType, armorInventoryType){
    if (armorType.name != ""){
        let origWep = armorType
        armorInventoryType.push(origWep)
        armorType = armorObj
        updatePlayerInfo()
    }
}

// Body Equip
function addNewBody(num){
    let y = playerStats.inventory.bodyWear
    playerStats.body = y[num];
    y.splice(num, 1)
}
function equipBody(num){
    let where = playerStats.body
    let invType = playerStats.inventory.bodyWear
    unequipArmor(where, invType);
    addNewBody(num);
    updatePlayerInfo()
}

// Head Equip
function addNewHead(num){
    let y = playerStats.inventory.headWear
    playerStats.head = y[num];
    y.splice(num, 1)
}
function equipHead(num){
    let where = playerStats.head
    let invType = playerStats.inventory.headWear
    unequipArmor(where, invType);
    addNewHead(num);
    updatePlayerInfo()
}

// Shoe Equip
function addNewShoe(num){
    let y = playerStats.inventory.footWear
    playerStats.shoes = y[num];
    y.splice(num, 1)
}
function equipShoe(num){
    let where = playerStats.shoes
    let invType = playerStats.inventory.footWear
    unequipArmor(where, invType);
    addNewShoe(num);
    updatePlayerInfo()
}

// Glove Equip
function addNewGlove(num){
    let y = playerStats.inventory.handWear
    playerStats.gloves = y[num];
    y.splice(num, 1)
}
function equipGlove(num){
    let where = playerStats.gloves
    let invType = playerStats.inventory.handWear
    unequipArmor(where, invType);
    addNewGlove(num);
    updatePlayerInfo()
}

////////////////////

// 1 LVL Light Enemy genator
// It creates an enemy for the player to fight with
// Name selected from a variety of level 1 light enemy names
// Lvl 1
// Health is hp of the players current 
// Damage 1-3 

// 1 LVL Dark Enemy genator
// It creates an enemy for the player to fight with lvl 1 enemeys
// Name selected from a variety of level 1 enemy names
// Lvl
// Health is 25% of the players current 
// Damage


// Enemy Appear loop 


///////////////////
// Function List//

// ***1.) Print Player Info
// *** printStats()

// ***2.) Equip Right Arm
// *** equipRightArm(// inventory index number "#")

// ***3.) Equip Left Arm
// *** equipLeftArm(// inventory index number "#")

// ***4.) Unequip selected Arm
// *** unequipArm(// selected arm "playerStats.leftArm")

// ***5.) Print Player Inventory Info
// *** printInventoryStats(//inventory type "playerStats.inventory.weapons")

// ***6.) Unequip armor type
// *** unequipArmor(armorType "playerStats.gloves", armorInventoryType "playerStats.inventory.handWear")

// ***7.)  Equip Head
// *** equipHead(inventory index number "#")

// ***8.) Equip Body
// *** equipBody(inventory index number "#")

// ***9.) Equip Shoe
// *** equipShoe(inventory index number "#")

// ***10.) Equip Glove
// *** equipGlove(inventory index number "#")


/////////////////
// Game Intro //
console.log("\n[Captain Dagast] Greetings weary traveler! My name is Captain Dagast!")
console.log("\t\t I will be your guide through the world of Argonya. ")


console.log("\n")
////////////////
// Game Loop //
