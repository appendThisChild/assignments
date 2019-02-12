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
        weapons: [],
        headWear: [],
        bodyWear: [],
        footWear: [],
        handWear: [],
        healthPotions: [],
        magicScrolls: []
    }
}
let meleeStrength = 10;
let magicStrength = 0;
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
let introGear = {  
    weapons: [
        {name: "Iron Sword", meleeAttackBonus: 10, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 0},
    ],
    headWear: [
        {name: "Leather Helmet", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 5},
    ],
    bodyWear: [
        {name: "Leather Armor", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 10},
    ],
    footWear: [
        {name: "Leather Boots", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 4},
    ],
    handWear: [
        {name: "Leather Gloves", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 1},
    ],
    healthPotions: [
        {
            name: "10 HP",
            hp: 10
        },
    ],
    magicScrolls: [
        {
            name: "Gain Magic!",
            gainMagAtt: 5,
    },
    ]
}
let enemys = [
    {
        name: "Bat",
        health: Math.floor(Math.random() * (64 - 40)) + 40,
        damageMin: 2,
        damageMax: 4,
    },
    {
        name: "Ghoul",
        health: Math.floor(Math.random() * (87 - 54)) + 54,
        damageMin: 11,
        damageMax: 15,
    },
    {
        name: "Witch",
        health: Math.floor(Math.random() * (120 - 87)) + 87,
        damageMin: 20,
        damageMax: 35,
    },
    {
        name: "Poison Rat",
        health: Math.floor(Math.random() * (47 - 31)) + 31,
        damageMin: 1,
        damageMax: 3,
    },
    {
        name: "Giant Spider",
        health: Math.floor(Math.random() * (67 - 40)) + 40,
        damageMin: 5,
        damageMax: 9,
    },
]
let lvl1Drop = {
    weapons: [
        {name: "Steel Sword", meleeAttackBonus: 15, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 0},
        {name: "Steal Dagger", meleeAttackBonus: 10, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 0},
        {name: "Wizard's Wand", meleeAttackBonus: 0, magicAttackBonus: 5, magicDefenceBonus: 0, meleeDefenceBonus: 0},
        {name: "Wizard's Staff", meleeAttackBonus: 0, magicAttackBonus: 10, magicDefenceBonus: 0, meleeDefenceBonus: 0}
    ],
    headWear: [
        {name: "Iron Helmet", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 10},
        {name: "Wizard's Hat", meleeAttackBonus: 0, magicAttackBonus: 4, magicDefenceBonus: 5, meleeDefenceBonus: 5},
        {name: "Fancy Hat", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 0}
    ],
    bodyWear: [
        {name: "Iron Armor", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 15},
        {name: "Wizard's Robes", meleeAttackBonus: 0, magicAttackBonus: 5, magicDefenceBonus: 10, meleeDefenceBonus: 5},
        {name: "Fancy Costume", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 0}
    ],
    footWear: [
        {name: "Iron Boots", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 10},
        {name: "Wizard's Boots", meleeAttackBonus: 0, magicAttackBonus: 4, magicDefenceBonus: 5, meleeDefenceBonus: 4},
        {name: "Fancy Shoes", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 0}
    ],
    handWear: [
        {name: "Iron Gauntlets", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 5},
        {name: "Wizard's Gloves", meleeAttackBonus: 0, magicAttackBonus: 3, magicDefenceBonus: 0, meleeDefenceBonus: 1},
        {name: "Fancy Gloves", meleeAttackBonus: 0, magicAttackBonus: 0, magicDefenceBonus: 0, meleeDefenceBonus: 0}
    ],
    healthPotions: [
        {name: "10 HP", hp: 10},
        {name: "20 HP", hp: 20},
        {name: "30 HP", hp: 30},
    ],
    magicScrolls: [],
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
    console.log("\nInventory: ")
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
    currentItems()
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
// Print Equipped Items
function currentItems(){
    let x = playerStats
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
        playerStats.inventory.weapons.push(origWep)
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
// Add intro gear
function initItems(){
    let x = playerStats.inventory
    let y = introGear
    x.weapons.push(y.weapons[0])
    x.headWear.push(y.headWear[0])
    x.bodyWear.push(y.bodyWear[0])
    x.handWear.push(y.handWear[0])
    x.footWear.push(y.footWear[0])
    x.healthPotions.push(y.healthPotions[0])
    x.magicScrolls.push(y.magicScrolls[0])
}
// Makes Array of Inventory Items
function invArrNames(inventoryName){
    let x = []
    for (let i = 0; i < inventoryName.length; i++){
        x.push(inventoryName[i].name)
    }
    return x
}
// Loops through the armor decisions 
function armorChoice(inventoryName){
    let x = inventoryName
    for (let j = 0; j < 1; j++){
        printInventoryStats(x)
        if (x != 0){
            console.log("What would you like to do?\n")
            let invChoice = ["Equip Armor"]
            let choose = ask.keyInSelect(invChoice, "")
            if (choose === 0){
                console.log("______________________________________________________________________________________________________________________")
                    printInventoryStats(x)
                    console.log("What armor would you like to equip?\n")
                    let weaps = invArrNames(x)
                    let weapChoice = ask.keyInSelect(weaps, "")
                    console.log("\n\t\tYou've Equipped " + x[weapChoice].name + "!\n")
                    if (x === playerStats.inventory.headWear){
                        equipHead(weapChoice)
                    } else if (x === playerStats.inventory.bodyWear){
                        equipBody(weapChoice)
                    } else if (x === playerStats.inventory.handWear){
                        equipGlove(weapChoice)
                    } else if (x === playerStats.inventory.footWear){
                        equipShoe(weapChoice)
                    }
                    
                j--
            }
        } else {
            ask.question('\n\t\t"Press Enter To Go Back"\n')
        }
    }  
}
// Unequip Loop
function unequipAll(){
    for (let j = 0; j < 1; j++){
        console.log("______________________________________________________________________________________________________________________")
        currentItems()
        console.log("What would you like to Unequip?\n")
        let current = ["Left Arm", "Right Arm", "Head", "Body", "Hand", "Foot"]
        let unequip = ask.keyInSelect(current, "")
        if (unequip === 0){
            unequipArm(playerStats.leftArm)
            playerStats.leftArm = armObj
            updatePlayerInfo()
            console.log("\nLeft Arm Unequipped")
            j--
        } else if (unequip === 1){
            unequipArm(playerStats.rightArm)
            playerStats.rightArm = armObj
            updatePlayerInfo()
            console.log("\nRight Arm Unequipped")
            j--
        } else if (unequip === 2){
            unequipArmor(playerStats.head, playerStats.inventory.headWear)
            playerStats.head = armorObj
            updatePlayerInfo()
            console.log("\nHead Unequipped")
            j--
        } else if (unequip === 3){
            unequipArmor(playerStats.body, playerStats.inventory.bodyWear)
            playerStats.body = armorObj
            updatePlayerInfo()
            console.log("\nBody Unequipped")
            j--
        } else if (unequip === 4){
            unequipArmor(playerStats.gloves, playerStats.inventory.handWear)
            playerStats.gloves = armorObj
            updatePlayerInfo()
            console.log("\nHand Unequipped")
            j--
        } else if (unequip === 5){
            unequipArmor(playerStats.shoes, playerStats.inventory.footWear)
            playerStats.shoes = armorObj
            updatePlayerInfo()
            console.log("\nFoot Unequipped")
            j--
        }  
    }  
}
// Weapons Loop 
function weaponsLoop(){
    for (let j = 0; j < 1; j++){
        printInventoryStats(playerStats.inventory.weapons)
        if (playerStats.inventory.weapons.length != 0){
            console.log("What would you like to do?\n")
            let invChoice = ["Equip Weapon"]
            let choose = ask.keyInSelect(invChoice, "")
            if (choose === 0){
                    console.log("______________________________________________________________________________________________________________________")
                    printInventoryStats(playerStats.inventory.weapons)
                    console.log("What weapon would you like to equip?\n")
                    let arms = ["Left Arm", "Right Arm"]
                    let weaps = invArrNames(playerStats.inventory.weapons)
                    let weapchoice = ask.keyInSelect(weaps, "")
                    if (weapchoice <= 0){
                        console.log("______________________________________________________________________________________________________________________")
                        console.log("Where would you like to equip that?\n")
                        let weapArm = ask.keyInSelect(arms, "")
                        if (weapArm === 0){
                            console.log("\n\t\tYou've Equipped " + playerStats.inventory.weapons[weapchoice].name + " to your Left Arm!\n")
                            equipLeftArm(weapchoice)
                        } else if (weapArm === 1){
                            console.log("\n\t\tYou've Equipped " + playerStats.inventory.weapons[weapchoice].name + " to your Right Arm!\n")
                            equipRightArm(weapchoice)
                        }
                    } 
                j--
            }
        } else {
            ask.question('\n\t\t"Press Enter To Go Back"\n')
        }
    }
}
// Potions Loop
function selectPotion(){
    let x = playerStats.inventory.healthPotions
    for (let j = 0; j < 1; j++){
        console.log("______________________________________________________________________________________________________________________")
        console.log("--------------------------------------------")
        console.log("Health: " + playerStats.health)
        console.log("--------------------------------------------")
        console.log("\nInventory: ")
        console.log("\tHealth Potions: ")
        for (let i = 0; i < x.length; i++){
            console.log("\n\t" + (i + 1) + ".) " + x[i].name)
        } 
        console.log("\n--------------------------------------------")
        if (playerStats.health < 100){
            if (x != 0){
                console.log("What would you like to do?\n")
                let invChoice = ["Select Health Potion"]
                let choose = ask.keyInSelect(invChoice, "")
                if (choose === 0){
                    console.log("______________________________________________________________________________________________________________________")
                    console.log("--------------------------------------------")
                    console.log("Health: " + playerStats.health)
                    console.log("--------------------------------------------")
                    console.log("\nInventory: ")
                    console.log("\tHealth Potions: ")
                    for (let i = 0; i < x.length; i++){
                        console.log("\n\t" + (i + 1) + ".) " + x[i].name)
                    } 
                    console.log("\n--------------------------------------------")
                    console.log("What potion would you like to select?\n")
                    let potions = invArrNames(x)
                    let potionChoice = ask.keyInSelect(potions, "")
                    if (potionChoice >= 0){
                        console.log("\n\t\tYou've Taken " + x[potionChoice].name + "!\n")
                        playerStats.health += x[potionChoice].hp
                        x.splice(potionChoice, 1)
                        if (playerStats.health > 100){
                            playerStats.health = 100
                        }
                    } else {
                        j--
                    }
                    j--
                }
            } else {
                console.log('\n\t"Nothing is this Inventory"\n')
                
            } 
        } else {
            console.log("\n\tYour health is Full!")
            ask.question('\n\t\t"Press Enter To Go Back"\n')
        }   
    }
}
// Scroll Loop
function selectScroll(){
    let x = playerStats.inventory.magicScrolls
    for (let j = 0; j < 1; j++){
        console.log("______________________________________________________________________________________________________________________")
        console.log("--------------------------------------------")
                console.log("\nInventory: ")
                console.log("\tMagic Scrolls: ")
                for (let i = 0; i < x.length; i++){
                    console.log("\n\t" + (i + 1) + ".) " + x[i].name)
                } 
                console.log("\n--------------------------------------------")
        if (x != 0){
            console.log("What would you like to do?\n")
            let invChoice = ["Select Magic Scroll"]
            let choose = ask.keyInSelect(invChoice, "")
            if (choose === 0){
                console.log("______________________________________________________________________________________________________________________")
                console.log("--------------------------------------------")
                console.log("\nInventory: ")
                console.log("\tMagic Scrolls: ")
                for (let i = 0; i < x.length; i++){
                    console.log("\n\t" + (i + 1) + ".) " + x[i].name)
                } 
                console.log("\n--------------------------------------------")
                console.log("What scroll would you like to select?\n")
                let potions = invArrNames(x)
                let potionChoice = ask.keyInSelect(potions, "")
                if (potionChoice >= 0){
                    console.log("\n\t\tYou've Taken " + x[potionChoice].name + "!\n\t\tYou've Earned 5 Magic Attack!\n")
                    magicStrength += x[potionChoice].gainMagAtt
                    x.splice(potionChoice, 1)
                    updatePlayerInfo()
                } else {
                    j--
                }
                j--
            }
        } else {
            console.log('\n\t"Nothing is this Inventory"\n')
            ask.question('\n\t\t"Press Enter To Go Back"\n')
        }
    } 
}
// Full Inventory Loop
function inventoryLoop(){
    for (let i = 0; i < 1; i++){
        printStats()
        console.log("What would you like to do?\n")
        let inventoryQuests = ["Unequip Item(s)", "Look-Up Weapons", "Look-Up Head Wear", "Look-Up Body Wear", "Look-Up Hand Wear", "Look-Up Foot Wear", "Look-Up Health Potions", "Look-Up Magic Scrolls"]
        let choice = ask.keyInSelect(inventoryQuests, "")
        if (choice === 0){
            unequipAll()
            i--
        } else if (choice === 1){
            weaponsLoop()
            i--
        } else if (choice === 2){
            armorChoice(playerStats.inventory.headWear)
            i--
        } else if (choice === 3){
            armorChoice(playerStats.inventory.bodyWear)
            i--
        } else if (choice === 4){
            armorChoice(playerStats.inventory.handWear)
            i--
        } else if (choice === 5){
            armorChoice(playerStats.inventory.footWear)
            i--
        } else if (choice === 6){
            selectPotion()
            i--
        } else if (choice === 7){
            selectScroll()
            i--
        }
    }   
}
/////////////////
// Game Intro //
    console.log("______________________________________________________________________________________________________________________")
    console.log("\n[Captain Dagast] \n\tGreetings weary traveler! My name is Captain Dagast!")
    console.log("\tI will be your guide through the world of Argonya. ")
    playerStats.name = ask.question("\nFirst! What is you name? \n");
    console.log("______________________________________________________________________________________________________________________")
    console.log("\n[Dagast] \n\tWelcome aboard " + playerStats.name + "! ")
    console.log("\tPlease take these items to get you started!")
    ask.question('\n\t\t"Press Enter To Accept Items"\n')
    console.log("______________________________________________________________________________________________________________________")
    console.log("\n\t\tYou have gained:\n")
    initItems()
    console.log('1 Iron Sword, 1 Leather Helmet, 1 Leather Armor, 1 Leather Boots, \n1 Leather Gloves, 1 Health Potion "10HP", 1 Magic Scroll "Gain Magic!"')
    console.log("\n[Dagast] \n\tI hope these serve you well!")
    ask.question('\n\t\t"Press Enter To Continue"\n')
    console.log("______________________________________________________________________________________________________________________")
    console.log("\n[Dagast] \n\tNow let's get started! \n\tHead down that hall and defeat all the enemies!")
////////////////
// Game Loop //
while (playerStats.health > 0){
    console.log("\n[Continue Quest!]")
    let gameOptions = ["Walk", "View Stats"]
    let gameChoice = ask.keyInSelect(gameOptions, "")
    if (gameChoice === 0){
        let x = Math.floor(Math.random() * 3)
        if (x === 0){
            console.log("______________________________________________________________________________________________________________________")
            console.log("\n[Enemy Has Appeared!]")
            // Generate enemy
            let y = Math.floor(Math.random() * 5)
            let enemy = enemys[y]
            //battle
            let healthLost = 0;
            console.log("\n[Let the Battle Begin!]")
            while (enemy.health > 0){
                console.log("\nHealth: " + playerStats.health)
                console.log("\n\t" + '"' + enemy.name + '"' + "\tHealth: " + enemy.health)
                let = battleChoice = ["Melee Attack", "Magic Attack", "Run", "View Stats"]
                console.log("\n Battle: ")
                let battleDecision = ask.keyInSelect(battleChoice, "")
                if (battleDecision === 0){
                    console.log("______________________________________________________________________________________________________________________")
                    let att = playerStats.meleeAttack
                    let x = Math.floor(Math.random() * 5)
                    let y = Math.floor(Math.random() * 4)
                    // melee attack
                    if (x === 0){
                        console.log("\n\tEnemy Blocked Your Attack!")
                    } else {
                        let dam = Math.floor(Math.random() * (att - (att / 2)) + 1) + (att / 2);
                    enemy.health -= dam
                    console.log("\n\tEnemy Took " + '"' + dam + '"' + " Damage!")
                    }
                    // receive damage
                    if (y === 0){
                        console.log("\n\tYou Blocked the Enemy's Attack!")
                    } else {
                        let myDam = (Math.floor(Math.random() * (enemy.damageMax - enemy.damageMin) + 1) + enemy.damageMin) - (playerStats.totalMeleeDefence / 4)
                        if (myDam < 0){
                            myDam = 0
                        } else {
                           playerStats.health -= myDam
                            healthLost += myDam 
                        }
                        console.log("\n\tYou Took " + '"' + myDam + '"' + " Damage!")   
                    }
                    if (playerStats.health <= 0){
                        break;
                    }
                } else if (battleDecision === 1){
                    console.log("______________________________________________________________________________________________________________________")
                    let att = playerStats.magicAttack
                    let x = Math.floor(Math.random() * 5)
                    let y = Math.floor(Math.random() * 4)
                    // melee attack
                    if (x === 0){
                        console.log("\n\tEnemy Blocked Your Attack!")
                    } else {
                        let dam = Math.floor(Math.random() * (att - (att / 2)) + 1) + (att / 2)
                    enemy.health -= dam
                    console.log("\n\tEnemy Took " + '"' + dam + '"' + " Damage!")
                    }
                    // receive damage
                    if (y === 0){
                        console.log("\n\tYou Blocked the Enemy's Attack!")
                    } else {
                        let myDam = (Math.floor(Math.random() * (enemy.damageMax - enemy.damageMin) + 1) + enemy.damageMin) - (playerStats.totalMeleeDefence / 4)
                            if (myDam < 0){
                                myDam = 0
                            } else {
                               playerStats.health -= myDam
                                healthLost += myDam 
                            }
                        console.log("\n\tYou Took " + '"' + myDam + '"' + " Damage!")   
                    }
                    if (playerStats.health <= 0){
                        break;
                    }
                } else if (battleDecision === 2){
                    let x = Math.floor(Math.random() * 2)
                    if (x === 0){
                        console.log("______________________________________________________________________________________________________________________")
                        if (y === 0){
                            console.log("\n\tYou Blocked the Enemy's Attack!")
                        } else {
                            let myDam = (Math.floor(Math.random() * (enemy.damageMax - enemy.damageMin) + 1) + enemy.damageMin) - (playerStats.totalMeleeDefence / 4)
                            if (myDam < 0){
                                myDam = 0
                            } else {
                               playerStats.health -= myDam
                                healthLost += myDam 
                            }
                            console.log("\n\tYou Failed to Get Away!\n\tYou Took " + '"' + myDam + '"' + " Damage!")   
                        }
                        if (playerStats.health <= 0){
                            break;
                        }
                    } else {
                        console.log("______________________________________________________________________________________________________________________")
                        console.log("You Successfully Got Away!")
                        break;
                    }
                } else if (battleDecision === 3){
                    console.log("______________________________________________________________________________________________________________________")
                    inventoryLoop()
                } else {
                    console.log("______________________________________________________________________________________________________________________")
                    console.log("\n[You Must Choose!]\n")
                } 
            }
            if (enemy.health <= 0){
                console.log("______________________________________________________________________________________________________________________")
                let x = Math.floor(Math.random() * 7)
                if (x === 0){
                    let y = Math.floor(Math.random() * lvl1Drop.weapons.length) 
                    playerStats.inventory.weapons.push(lvl1Drop.weapons[y])
                } else if (x === 1){
                    let y = Math.floor(Math.random() * lvl1Drop.headWear.length) 
                    playerStats.inventory.headWear.push(lvl1Drop.headWear[y])
                } else if (x === 2){
                    let y = Math.floor(Math.random() * lvl1Drop.bodyWear.length) 
                    playerStats.inventory.bodyWear.push(lvl1Drop.bodyWear[y])
                } else if (x === 3){
                    let y = Math.floor(Math.random() * lvl1Drop.footWear.length) 
                    playerStats.inventory.footWear.push(lvl1Drop.footWear[y])
                } else if (x === 4){
                    let y = Math.floor(Math.random() * lvl1Drop.handWear.length) 
                    playerStats.inventory.handWear.push(lvl1Drop.handWear[y])
                } else if (x === 5){
                    let y = Math.floor(Math.random() * lvl1Drop.healthPotions.length) 
                    playerStats.inventory.healthPotions.push(lvl1Drop.healthPotions[y])
                } 
                // else if (x === 6){
                //     let y = Math.floor(Math.random() * lvl1Drop.magicScrolls.length) 
                //     playerStats.inventory.magicScrolls.push(lvl1Drop.magicScrolls[y])
                // }
                playerStats.health += (healthLost / 2);
                playerStats.money += (healthLost / 4);
                playerStats.exp += healthLost;
                console.log("\n\tYou defeated the Enemy!\n\n\tA new item is in your Inventory...\n\tand you earned  $" + (healthLost / 4) + "CC and " + healthLost + "EXP!")
            }
            console.log("______________________________________________________________________________________________________________________")    
        } else {
            console.log("______________________________________________________________________________________________________________________")
            console.log("\n[You Moved Forward...]")
        }
    } else if (gameChoice === 1){
        inventoryLoop()
        console.log("______________________________________________________________________________________________________________________")
    }
}
console.log("\n\t\tYOU DIED!\n")
console.log("\n\t\tGAME OVER!!!\n")