var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
function forception(x, y){
    let result = []
    for (let i = 0; i < x.length; i++){
        result.push(x[i] + ":")
        for (let j = 0; j < y.length; j++){
            result.push(y[j])
        }
    }
    return result
}
console.log(forception(people, alphabet))