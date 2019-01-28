//Preliminaries:
//P #1
if (5 > 3){
    console.log("is greater than")
}
//P #2
let cat = "cat"
if (cat.length === 3){
    console.log("is the length")
}
//P #3
let dog = "dog"
if (cat === dog){
    conole.log("Same")
} else {
    console.log("not the same")
}
//Bronze Medal Round:
var person = {
    name: "Bobby",
    age: 12
}
//BM #1
if (person.age >= 18){
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is prohibited to go to the movie.")
}
//BM #2
if (person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is prohibited to go to the movie.")
}
//BM #3
if (person.age >= 18 && person.name[0] === "B"){
    console.log(person.name + " is allowed to go to the movie.")
} else {
    console.log(person.name + " is prohibited to go to the movie.")
}
//Silver Medal Round:
//SM #1
if (1 === "1"){
    console.log("loose")
} else if (1 == "1"){
    console.log("abstract")
} else {
    console.log("not equal at all")
}
//SM #2
if (1 <= 2 && 2 == 4){
    console.log("yes")
} else {
    console.log("no")
}
//Gold Medal Round:
//GM #1
if (typeof "dog" === "string"){
    console.log("Yep")
}
//GM #2
if (typeof true === "boolean"){
    console.log("Yep")
}
//GM #3
if (typeof variable === "undefined"){
    console.log("Yep")
}
//GM #4
if ("s" > 12){
    console.log("True")
} else {
    console.log("False")
}
//GM #5
let myNum = 10;
    myNum % 2 > 0
    ? console.log("This number is odd")
    : console.log("This number is even")