function collectAnimals(...list) {  
    return list
}

// console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}

// console.log(combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrit"]))

const vacation = {  
location: "Burly Idaho",
duration: "2 weeks"
};

function parseSentence(){
    let {location, duration} = vacation
    return `We're going to have a good time in ${location} for ${duration}`
}
// console.log(parseSentence())

function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [x, firstFav, secoundFav, thirdFav] = arr
    return `My top three favorite activities are ${firstFav}, ${secoundFav}, and ${thirdFav}`

}

// console.log(returnFavorites(favoriteActivities))

const combineAnimals = (...arr) =>  newArr = [...arr[0], ...arr[1], ...arr[2]]

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

// console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

const product = (...numbers) => {  
    return numbers.reduce((acc, number) => acc * number, 1)
}

// console.log(product(1,2,3,4,5))

const unshift = (arr, ...arr1) => [...arr, ...arr1]
// console.log(unshift([1,2,3,4],5,6,7,8,9))

const populatePeople = names => names.map(name => ({firstName: name.split(" ")[0], lastName: name.split(" ")[1]}))

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones", "Ryan Pettingill"]))
