function doubleNumbers(arr){
    let result = arr.map(function(item){
        return item * 2
    })
    return result
}
  
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
function stringItUp(arr){
    let result = arr.map(function(item){
        return item.toString()
    })
    return result
}
  
// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
function capitalizeNames(arr){
    let result = arr.map(function(item){
        return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase()
    })
    return result
}

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));
function namesOnly(arr){
    let result = arr.map(function(item){
        return item.name
    })
    return result
}
  
// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
function makeStrings(arr){
    let result = arr.map(function(item){
        if (item.age >= 18){
            return item.name + "can go to The Matrix"
        } else {
            return item.name + "is under age!!"
        }
    })
    return result
}
  
// console.log(makeStrings([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
