const hasSpaces = (str) => {
    const arr = str.split("")
    if (arr.indexOf(" ") >= 0){
        return true 
    } else {
        return false
    }
}
console.log(hasSpaces("hello "))