function stringToArray(x){
    let result = []
    for (let i = 0; i < x.length; i++){
        result.push(x[i])
    }
    return result
}
console.log(stringToArray("This string"))
//
function whereIsThisChar(x, y){
    let result 
    for (let i = 0; i < x.length; i++){
        if (x[i] === y){
            result = "This character's first occurance is in index " + i
            break;
        } else {
            result = "Character not found!"
        }
    }
    return result
}
console.log(whereIsThisChar("This other string", "g"))
//
let arr = [5, 7, 8, 42, 0, 54, 73, 43, 3, 56, 2]
let arr2 = [6, 3, 76, 12, 32]
function doesItHas42(x){
    let result 
    for (let i= 0; i < x.length; i++){
        if (x[i] === 42){
            result = "Found 42!"
            break;
        } else {
            result = "42 not found!"
        }
    }
    return result
}
console.log(doesItHas42(arr))
console.log(doesItHas42(arr2))
//
function smallestFirst10(x){
    let result = Infinity
    for (let i = 0; i < 10; i++){
        if (x[i] < result){
            result = x[i]
        }
    }
    return result
}
console.log(smallestFirst10(arr))