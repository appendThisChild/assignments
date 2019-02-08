let readline = require("readline-sync");
let name = readline.question("\nMy name is Leo and I need your help. What's your name honorable warrior? ");
function cap(x){
    let z = x.charAt(0).toUpperCase() + x.substr(1);
    return z
}
console.log("\nWell " + cap(name) + ", tell what I need to do to get out of this room.\nHere are the options: ")
let options = ["Put hand in hole", "Find the key", "Open the door"]
for (let j = 0; j < 1; j++){
    let choose = readline.keyInSelect(options, "")
    if (options[choose] === "Put hand in hole"){
        console.log("\nYou died!\nTry again\nHere are the options: ")
        j--
    } else if (options[choose] === "Find the key"){
        console.log("\nYou found the key!\nWhat's next!")
        for (let i = 0; i < 1; i++){
            let choose = readline.keyInSelect(options, "")
            if (options[choose] === "Put hand in hole"){
                console.log("\nYou died!")
                console.log("Try again")
                console.log("Here are the options: ")
                i--
            } else if (options[choose] === "Find the key"){
                console.log("\nYou already found the key")
                i--
            } else if (options[choose] === "Open the door"){
                console.log("You've Escaped!")
            } else {
                console.log("\Make a decision")
                i--
            }
        }
    } else if (options[choose] === "Open the door"){
        console.log("\nDoor is locked")
        j--
    } else {
        console.log("\Make a decision")
        j--
    }
}
