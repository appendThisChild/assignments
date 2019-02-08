let ask = require('readline-sync');
function capUp(x){
    let z = x.charAt(0).toUpperCase() + x.substr(1);
    return z
}
console.log('Hello! My name is Betty. Help me get to know you!\n');
let firstName = ask.question('What is your first name? ');
console.log("\tNice to meet you " + firstName.toUpperCase() + "!\n");
let comAge = Math.floor(Math.random() * 100)
let age = ask.question("I'm " + comAge + " years old , how old are you? ")
function ageResp(){
    if (comAge > age){
        return "\tAwe, I remember when I was " + age + ".\n"
    } else if (comAge < age) {
        return "\tWow! I can't wait until I'm that old!\n"
    } else {
        return "\tThat's cool, we're the same age.\n"
    }
}
console.log(ageResp())
let hobby = ask.question("When you turn " + (parseInt(age) + 5) + ", where would you like to be in life? ")
let half = hobby.substr(hobby.length / 2, hobby.length)
console.log('\tOpps! I only got the last half of that, you said, "' + half + '."\n')
let end = ask.keyInYNStrict("I believe the memory is still there, would you like me to retrieve it? ");
let done = function (){
    if (end === true){
        return '\tI found it! You said, "' + capUp(hobby) + '."'
    } else {
        return "\tOkay! Goodbye"
    }
}
console.log(done())
