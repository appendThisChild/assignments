// #1, Print how many times the array has a computer in it. 
let officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];
let count = 0;
for (x = 0; x < officeItems.length; x++) {
    if (officeItems[x] === "computer"){
        count++;
    };
}
console.log("There are " + count + " computers in the array.")
// #2, Print who is and is not old enough to go to this movie.
console.log("\n")
let peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 
  for (x = 0; x < peopleWhoWantToSeeMadMaxFuryRoad.length; x++){
      if (peopleWhoWantToSeeMadMaxFuryRoad[x].age >= 18){
          if (peopleWhoWantToSeeMadMaxFuryRoad[x].gender === "male"){
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is old enough. He can see the movie.")
          } else {
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is old enough. She can see the movie.")
          }
      } else {
          if (peopleWhoWantToSeeMadMaxFuryRoad[x].gender === "male"){
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is not old enough. He cannot see the movie.")
          } else {
              console.log(peopleWhoWantToSeeMadMaxFuryRoad[x].name + " is not old enough. She cannot see the movie.")
          }
      }
  }
// Bonus, Tell wheather the light is on or off
console.log("\n")
let arrayA = [2, 5, 435, 4, 3];
let arrayB =[1, 1, 1, 1, 3];
let arrayC = [9, 3, 4, 2];
let light = 0;
// #1
console.log(light)
for (x = 0; x < arrayA.length; x++){
    light += arrayA[x]
}
if (light % 2 === 0){
    console.log("The light is off!")
} else {
    console.log("The light is on!")
}
light = 0
// #2
console.log(light)
for (x = 0; x < arrayB.length; x++){
    light += arrayB[x]
}
if (light % 2 === 0){
    console.log("The light is off!")
} else {
    console.log("The light is on!")
}
light = 0
// #3
console.log(light)
for (x = 0; x < arrayC.length; x++){
    light += arrayC[x]
}
if (light % 2 === 0){
    console.log("The light is off!")
} else {
    console.log("The light is on!")
}