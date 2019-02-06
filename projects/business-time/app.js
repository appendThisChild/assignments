let nav = document.getElementById("mySideNav")
function openNav() {
    nav.style.width = "175pt";
}
document.addEventListener("click", function(event){
    let isClickInside = nav.contains(event.target)
    if (isClickInside && nav.style.width === "175pt"){
        nav.style.width = "0"
    }
})

// Contact Page
let contact = document.contact
contact.addEventListener("submit", function(){
    alert("We thank you for your feedback!\nWe will get back to as soon as possible!")
})