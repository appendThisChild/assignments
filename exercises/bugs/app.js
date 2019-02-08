


// window.addEventListener('load', yourFunction);
// function yourFunction() {
//     console.log(document)
// }

var form = document.form;
var firstName = form.firstName;
var lastName = form.lastName;
var age = form.age;
var gender = form.gender;
// var location = document.form["travel-location"];

form.addEventListener("submit", function(e) {
    e.preventDefault()
    
    var diet = {};
    if (form.vegan.checked) {
        diet.push(form.vegan.value);
    }
    if (form.gluten.checked) {
        diet.push(form.gluten.value);
    }
    if (form.paleo.checked) {
        diet.push(form.paleo.value);
    }


    console.log("First Name: " + firstName.value + "\nLast Name: " + lastName.value + "\nAge: " + age.value + "\nGender: " + gender.value + "\nTravel Location: " + location.value + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident..");
})