let num = document.getElementById('number')
let numb = parseInt(sessionStorage.getItem("value")) || 0
document.addEventListener("click", function(){
    numb += 1
    num.textContent = numb;
    sessionStorage.setItem("value", numb)
    console.log("click")
})