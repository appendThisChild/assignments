var lyrics = ["This", "hit", "that", "ice", "cold", 
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

//1.) Return the lyrics as a string to the console
function toString(x){
    let y = x.join(' ')
    console.log(y)
}
// toString(lyrics)

//2.) Return the lyrics as a string to the console backwards
function reverseToString(x){
    let y = x.reverse().join(' ')
    console.log(y)
}
// reverseToString(lyrics)

//3.) Return a string of just everyother word
function everyOtherWord(x){
    let y = []
    for (let i = 0; i < x.length; i++){
        if (i % 2 === 0){
            y.push(x[i])
            
        }
          
    }
    let z = y.join(' ')
    console.log(z)
}
// everyOtherWord(lyrics)

//4.) Return the lyric as a string with every two words switched
function twoWordSwitch(x){
    let y = []
    for (let i = 0; i < x.length; i++){
        if (i % 2 === 0){
            y.push(x[i + 1])
            y.push(x[i])
        } 
    }
    let z = y.join(' ')
    console.log(z)
}
// twoWordSwitch(lyrics)

//5.) Return lryics "array" in a random order 
function arrRanOrderToString(x){
    let y = []
    let v = []
    let w = []
// This Loop seperates the repeated words from the param array = x 
// into a new array = w
    for (let i = 0; i < x.length; i++){
        if (v.indexOf(x[i]) < 0){
            v.push(x[i])
        } else {
            w.push(x[i])
        }
    }
// This Loop takes the words from the param array = x and puts them into 
// new array = y in a random order. It also takes away any repeated words
    for (let i = 0; i < x.length - w.length; i++){
        let num = x[randomNumber(x)]
        if (y.indexOf(num) < 0 ){
           y.push(num) 
        } else {
            i--
        }
    }
// This Loop adds back in the repeated words from the param array = x
// that were supposed to be repeated in a random place in the new array = y
    for (let i = 0; i < w.length; i++){
        y.splice(randomNumber(y), 0,w[i])
    }
    let z = y.join(' ')
    console.log(z)
}
function randomNumber(x){
    let y = Math.floor(Math.random() * x.length)
    return y
}
// arrRanOrderToString(lyrics)

// This is the same things way simpler 
function arrRanOrderEasy(x){
    let y = []
    for (let i = 0; i < x.length; i++){
        y.splice(randomNumber(x), 0, x[i])
    }
    let z = y.join(' ')
    console.log(y.length)
    console.log(z)
}
arrRanOrderEasy(lyrics)