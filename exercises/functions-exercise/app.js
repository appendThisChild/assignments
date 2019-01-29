function twoNum(num1, num2){
    return num1 + num2
}
console.log(twoNum(1 ,2))
//
function large(num1, num2, num3){
    return Math.max(num1, num2, num3)
}
console.log(large(9,4,7))
//
function evenOdd(num1){
    if (num1 % 2 === 0){
        return "Even"
    } else {
        return "Odd"
    }
}
console.log(evenOdd(5))
//
function overUnder(stringToDisplay){
    if (stringToDisplay.length <= 20){
        return stringToDisplay + " " + stringToDisplay
    } else {
        return stringToDisplay.slice(0, stringToDisplay.length/2)
    }
}
console.log(overUnder("Blueberry"))
console.log(overUnder("Waffle Toast and Eggs"))
//
function fib(n){
    if (n <= 2){
        return 1
    } else {
        return fib(n) = fib(n - 1) + fib(n - 2)
    }
}
console.log(fib(2))
console.log(fib(8))
console.log(fib(5))
// The next number is the number previous plus the current
//n = (n - 2) + (n - 1)
