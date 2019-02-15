function total(arr) {
    return arr.reduce(function(total, sum){
        return total + sum
    })
}
 
// console.log(total([1,2,3]));
//
//
function stringConcat(arr) {
    return arr.reduce(function(total, sum){
        // console.log(total)
        return String(total) + String(sum)
        
    })
}
 
// console.log(stringConcat([1,2,3]));
 //
 //
function totalVotes(arr) {
    return arr.reduce(function(total, sum){
       return total + (sum.voted === true)

    }, 0) 
}
 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// console.log(totalVotes(voters));
//
//
function shoppingSpree(arr) {
    return arr.reduce(function(total, sum){
        return total + (sum.price)
    }, 0) 
 }
 
 var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
 ];
 
//  console.log(shoppingSpree(wishlist)); 
// 
// 
function flatten(arr) {
    return arr.reduce(function(total, sum){
        return total.concat(Array.isArray(sum) ? flatten(sum) : sum);
    }, []) 
    
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// console.log(flatten(arrays));
//
//
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

// var accumalator = {}
// is currentPerson > 25 && currentPerson < 40
// accumalator.youngVotes += 1
function voterResults(arr) {
    return arr.reduce(function(accumlator, currentPerson){
        console.log(currentPerson)
        if (currentPerson.age <= 25){
            if (currentPerson.voted === true){
                accumlator.youngVotes = (accumlator.youngVotes || 0) + 1
            } 
            accumlator.youth = (accumlator.youth || 0) + 1
            return accumlator
        } else if (currentPerson.age >25 && currentPerson.age <= 35){
            if (currentPerson.voted === true){
                accumlator.midVoted = (accumlator.midVoted || 0) + 1
            }
            accumlator.mids = (accumlator.mids || 0) + 1
            return accumlator
        } else if (currentPerson.age > 35 && currentPerson.age <= 55){
            if (currentPerson.voted === true){
                accumlator.oldVotes = (accumlator.oldVotes || 0) + 1
            }
            accumlator.olds = (accumlator.olds || 0) + 1
            return accumlator
        }
   },{})
}

console.log(voterResults(voters));