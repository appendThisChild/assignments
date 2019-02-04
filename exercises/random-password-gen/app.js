function randomPasswordGenerator(num, str){
    let result = "";
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*.,-_=+";
    let n = charset.length;
    let m = str.length;
    for (let i = 0; i < num; i++){
        result += charset.charAt(Math.floor(Math.random() * n))
    }
    return result
}

console.log(randomPasswordGenerator(5, "book"))