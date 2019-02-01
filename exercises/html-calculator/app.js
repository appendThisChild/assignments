let add = document.add
let sub = document.sub
let multi = document.multi
let addInput1 = add.num1
let addInput2 = add.num2
let subInput1 = sub.num1
let subInput2 = sub.num2
let multiInput1 = multi.num1
let multiInput2 = multi.num2
add.addEventListener("submit", function (event) {
    event.preventDefault()
    let x = parseInt(addInput1.value)
    let y = parseInt(addInput2.value)
    document.getElementById("add").innerText = "= " + (x + y)

})
sub.addEventListener("submit", function (event) {
    event.preventDefault()
    let x = parseInt(subInput1.value)
    let y = parseInt(subInput2.value)
    document.getElementById("sub").innerText = "= " + (x - y)

})
multi.addEventListener("submit", function (event) {
    event.preventDefault()
    let x = parseInt(multiInput1.value)
    let y = parseInt(multiInput2.value)
    document.getElementById("multi").innerText = "= " + (x * y)

})