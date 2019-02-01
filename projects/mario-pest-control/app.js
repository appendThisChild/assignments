let totalCoins = document.totalCoins
let goombas = totalCoins.goombas
let bobOmbs = totalCoins.bobOmbs
let cheepCheeps = totalCoins.cheepCheeps
let equal = document.getElementById("equal")
totalCoins.addEventListener("submit", function (event) {
    event.preventDefault()
    let x = parseInt(goombas.value)
    let y = parseInt(bobOmbs.value)
    let z = parseInt(cheepCheeps.value)
    equal.innerText = ((x * 5) + (y * 7) + (z * 11))

})