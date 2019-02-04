function reverseStr(str){
    let result = str.split("").reverse().join("")
    return result
}
// console.log(reverseStr("Something"))
//
function isNum(x){
    if (typeof x == 'number'){
        return true
    } else {
        return false
    }
}
// console.log(isNum("Total False"))
// console.log(isNum(123456))
//
function isEven(x){
    if (x % 2 === 0){
        return true 
    } else {
        return false
    }
}
// console.log(isEven(6))
// console.log(isEven(13))
//
function averageArray(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        result += arr[i]
    }
    let end = result / arr.length
    return end
}
// console.log(averageArray([1,2,3]))
// console.log(averageArray([5,-10,10,20]))
//
function combineArrays(arr1, arr2){
    let n = (arr1.length + arr2.length) / 2
    console.log(n)
    let result = []
    for (let i = 0; i < n; i++){
        result.push(arr1[i])
        result.push(arr2[i])
    }
    return result
}
console.log(combineArrays(["a","b","c"],[1,2,3]))