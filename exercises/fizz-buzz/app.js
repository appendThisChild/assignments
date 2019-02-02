function returnnArr(){
    let result = []
    let tally = {
        fizzbuzz: 0,
        fizz: 0,
        buzz: 0
    }
    for (let i = 1; i <= 100; i++){
        if (i % 3 === 0 && i % 5 === 0){
            result.push("fizzbuzz")
            tally.fizzbuzz++
        } else if (i % 3 === 0){
            result.push("fizz")
            tally.fizz++
        } else if (i % 5 === 0){
            result.push("buzz")
            tally.buzz++
        } else {
            result.push(i)
        }
    }
    return [result, tally]
}
console.log(returnnArr()) 