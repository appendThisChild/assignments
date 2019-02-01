var input = "bookkeeper larry";
function noDuplicates(str){
    let result = '';
    for (let i = 0; i < str.length; i++){
        if(result.indexOf(str[i]) < 0){
            result += str[i]
        }
    }
    console.log(result)
}
noDuplicates(input)
//
function random(str){
for(var i = 0; i < 1; i++) {
    str = removeRandomLetter(str);
}
console.log(str)
}
function removeRandomLetter(str) {
    var pos = Math.floor(Math.random() * str.length);
    return str.substr(0, pos) + str.substr(pos + 1);
}
random(input)
//
