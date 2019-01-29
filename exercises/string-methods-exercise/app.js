function capilizeAndLowercase(string){
    return string.toUpperCase() + string.toLowerCase()
}
console.log(capilizeAndLowercase("Hello"))
//
function findMiddleIndex(string){
    let n = string.length / 2 
    return Math.floor(n)
}
console.log(findMiddleIndex("Hello"))
console.log(findMiddleIndex("Hello World"))
//
function returnFirstHalf(string){
    return string.slice(0, string.length/2)
}
console.log(returnFirstHalf("Hello"))
console.log(returnFirstHalf("Hello World"))
//
function capilizeAndLowercase2(string){
    return string.slice(0, string.length/2).toUpperCase() + string.slice(string.length/2, string.length).toLowerCase()
}
console.log(capilizeAndLowercase2("Hello"))
console.log(capilizeAndLowercase2("Hello World"))
//
function capitalize(str){
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    })
}
console.log(capitalize("hey friends! practice practice practice!"))