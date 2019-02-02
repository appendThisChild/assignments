let form = document.form
let first = form.firstName
let last = form.lastName
let age = form.age
let gen = form.gender
let loc = form.location
let vegan = form.vegan
let veg = form.vegetarian
let kos = form.kosher
let lac = form.lactoseFree
form.addEventListener("submit", function (e){
    e.preventDefault()
    let x = "";
    x += "First name: " + first.value + "\n" + "Last name: " + 
    last.value + "\n" + "Age: " + age.value + "\n" + "Gender: " + gen.value + "\n" + 
    "Location: " + loc.value + "\n" + "Dietary restrictions: ";
    if (vegan.checked == true) {
        x += vegan.value
    }
    if (veg.checked == true) {
        if (vegan.checked == true) {
            x += ", " 
        }
        x += veg.value
    }
    if (kos.checked == true) {
        if (vegan.checked == true || veg.checked == true) {
            x += ", " 
        }
        x += kos.value
    }
    if (lac.checked == true) {
        if (vegan.checked == true || veg.checked == true || kos.checked == true) {
            x += ", " 
        }
        x += lac.value
    }
    if (vegan.checked == false && veg.checked == false && kos.checked == false && lac.checked == false){
        x += "None"
    }
    alert(x)
})
