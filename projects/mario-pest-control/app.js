let totalCoins = document.totalCoins
let goombas = totalCoins.goombas
let bobOmbs = totalCoins.bobOmbs
let cheepCheeps = totalCoins.cheepCheeps
let equal = document.getElementById("equal")
var img = document.createElement("img");
// var src = document.getElementById("equalImage");
// img.setAttribute("src", "https://www.pngarts.com/files/3/Mario-Coin-PNG-High-Quality-Image.png");
img.setAttribute("title", "Total Coins");
totalCoins.addEventListener("submit", function (event) {
    event.preventDefault()
    let x = parseInt(goombas.value)
    let y = parseInt(bobOmbs.value)
    let z = parseInt(cheepCheeps.value)
    // src.appendChild(img);
    img.className = "img2";
    equal.innerText = ((x * 5) + (y * 7) + (z * 11))
    equal.className = "answer"
})