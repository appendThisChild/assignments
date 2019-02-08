var ask = require('readline-sync')

// animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
// index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');

function add(num1, num2){
    let result = parseInt(num1) + parseInt(num2);
    return result
}
function sub(num1, num2){
    let result = parseInt(num1) - parseInt(num2);
    return result
}
function divi(num1, num2){
    let result = parseInt(num1) / parseInt(num2);
    return result
}
function mult(num1, num2){
    let result = parseInt(num1) * parseInt(num2);
    return result
}
let op = ["Add", "Subtract", "Divide", "Multiply"];
let n1 = ask.question("\nEnter your first number: ");
let n2 = ask.question("\nEnter your second number: ");
let x = ask.keyInSelect(op, "Select a operation: ")
function answer(){
    if (op[x] === "Add"){
        return add(n1, n2)
    } else if (op[x] === "Subtract"){
        return sub(n1, n2)
    } else if (op[x] === "Divide"){
        return divi(n1, n2)
    } else if (op[x] === "Multiply"){
        return mult(n1, n2)
    } else {
        return "You've failed!"
    }
}
console.log(answer())
