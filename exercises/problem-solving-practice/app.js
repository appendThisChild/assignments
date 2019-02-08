// let arr = [3, 5, 2, 8, 1]
// function largest(x){
//     let result = 0;
//     for (let i = 0; i < x.length; i++){
//         if (x[i] > result){
//             result = x[i]
//         }
//     }
//     return result
// }
// console.log(largest(arr))
// 
//
let arr = ["#3", "$$$", "C%4!", "Hey!"]
function checkForThisLetter(x, key){
    let result = []
    for (let i = 0; i < x.length; i++){
        if (x[i].indexOf(key) > -1){
            result.push(x[i])
        }
    }
    return result
}
console.log(checkForThisLetter(arr, "$"))