let array = [3, 6, 8, 2]

function fiveAndGreaterOnly(arr) {
    let result = arr.filter(function(item){
        if (item >= 5){
            return item
        }
    })
    return result
}
// console.log(fiveAndGreaterOnly(array));
function evensOnly(arr){
    let result = arr.filter(function(item){
        if (item % 2 === 0){
            return item
        }
    })
    return result
}
// console.log(evensOnly(array))
let array2 = ["dog", "wolf", "by", "family", "eaten", "camping"]
function fiveCharactersOrFewerOnly(arr) {
    let result = arr.filter(function(item){
        if (item.length <= 5){
            return item
        }
    })
    return result
}
//   console.log(fiveCharactersOrFewerOnly(array2));
let array3 = [
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
]
function peopleWhoBelongToTheIlluminati(arr){
    let result = arr.filter(function(item){
        if (item.member === true){
            return item
        }
    })
    return result
}
// console.log(peopleWhoBelongToTheIlluminati(array3))
let array4 = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
function ofAge(arr){
    let result = arr.filter(function(item){
        if (item.age >= 18){
            return item
        }
    })
    return result 
}
console.log(ofAge(array4))