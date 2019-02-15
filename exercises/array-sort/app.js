function leastToGreatest(arr) {
    let x = arr.sort(function(a, b){return a - b})
    return x
}
  
// console.log(leastToGreatest([1, 3, 5, 2, 90, 20]));
//
//
function greatestToLeast(arr) {
    let x = arr.sort(function(a, b){return b - a})
    return x
}
// console.log(greatestToLeast([1, 3, 5, 2, 90, 20]));
//
//
function lengthSort(arr) {
    let x = arr.sort(function(a, b){return a.length - b.length})
    return x
}
// console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"]));
//
//
function alphabetical(arr) {
    arr.sort()
    return arr
}
// console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"]));
//
//
function byAge(arr){
    arr.sort(function(a, b){return a.age - b.age})
    return arr
}
  
console.log(byAge([
    {
        name: "Quiet Samurai",
        age: 22
    },
    {
        name: "Arrogant Ambassador",
        age: 100
    },
    {
        name: "Misunderstood Observer",
        age: 2
    },
    {
        name: "Unlucky Swami",
        age: 77
    }
]));