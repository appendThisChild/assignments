//
for (x = 0; x < 10; x++){
    console.log(x)
}
console.log("\n")
//
for (x = 9; x > -1; x--){
    console.log(x)
}
console.log("\n")
//
let fruit = ["banana", "orange", "apple", "kiwi"];
for (x = 0; x < fruit.length; x ++){
    console.log(fruit[x])
}
// Bronze #1
console.log("\n")
let array = [];
for (x = 0; x < 10; x++){
    array.push(x);
}
console.log(array)
// Bronze #2
console.log("\n")
for (x = 0; x <= 100; x++){
    if (x % 2 === 0){
        console.log(x)
    }
}
// Bronze #3
fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
console.log("\n")
for (x = 0; x < fruit.length; x++){
    if (x % 2 === 0){
        console.log(fruit[x])
    }
}
// Silver #1
let peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ];
  console.log("\n")
for (x = 0; x < peopleArray.length; x++){
    console.log(peopleArray[x].name)
}
// Silver #2
console.log("\n")
let names = [];
let occupations = [];
for (x = 0; x < peopleArray.length; x++){
    names.push(peopleArray[x].name);
    occupations.push(peopleArray[x].occupation);
}
console.log(names)
console.log(occupations)
//Silver #3
console.log("\n")
names = [];
occupations = [];
for (x = 0; x < peopleArray.length; x++){
    if (x % 2 === 0){
        names.push(peopleArray[x].name)
    } else if (x % 2 != 0){
        occupations.push(peopleArray[x].occupation)
    }
}
console.log(names)
console.log(occupations)
// Gold #1
console.log("\n")
let grid = [];
for (x = 0; x < 3; x++){
    grid.push([0,0,0])
}
console.log(grid)
// Gold #2
console.log("\n")
grid = [];
for (x = 0; x < 3; x++){
    grid.push([x,x,x])
}
console.log(grid)
// Gold #3
console.log("\n")
grid = [];
for (x = 0; x < 3; x++){
    grid.push([0,1,2])
}
console.log(grid)
// Gold #4 
console.log("\n")
grid = [[0,0,0],[0,0,0],[0,0,0]];
for (x = 0; x < 3; x++){
    grid[x] = ["x","x","x"]
}
console.log(grid)
//Ryan's Bonus 
console.log("\n")
grid = [];
for (x = 1; x < 9; x++){
    grid.push([x++,x++,x])
}
console.log(grid)
//
console.log("\n")
grid = [[1,2,3],[1,2,3],[1,2,3]];
for (x = 0; x < 3; x++){
    grid[[x]].fill("x");
}

console.log(grid)