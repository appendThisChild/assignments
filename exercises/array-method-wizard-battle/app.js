var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]
// wizards.forEach(function(element){console.log(element)})
//
//
var wizards = [
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil",
      isAlive: true,
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good",
      isAlive: true,
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good",
      isAlive: true,
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good",
      isAlive: true,
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good",
      isAlive: true,
    }
]
// wizards.forEach(function(element){console.log(element.name)})
//
//
let newWizards = []
wizards.forEach(function(element){
    if (element.alignment === "neutral good"){
        newWizards.push(element)
    }
})
// console.log(newWizards)
// console.log(wizards)
//
//
// console.log(wizards.findIndex(function(element){
//    return element.alignment === "lawful good"
// }))
//
//
// console.log(wizards.every(function(arr){
//     return arr.isAlive === true 
// }))
//
//
// console.log(wizards.some(function(element){
//     return element.alignment === "neutral good"
// }))
//
//
wizards.forEach(function(element){
    if (element.alignment === "neutral good"){
        element.isAlive = false
    }
})
// console.log(wizards)
// console.log(wizards.every(function(arr){
//     return arr.isAlive === true 
// }))
//
//
console.log(wizards.some(function(element){
    return element.isAlive === true
}))