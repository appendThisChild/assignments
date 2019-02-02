let box = document.getElementById("box")
let text = document.getElementById("text")
let page = document.getElementById("page")
box.addEventListener("mouseover", function(e){
    box.className = "box1"
    text.innerText = "Click and Hold Me!"
})
box.addEventListener("mouseout", function(e){
    box.className = "box"
    text.innerText = "Hover Over Me!"
})
box.addEventListener("mousedown", function(e){
    box.className = "box2"
    text.innerText = "Let Go of Me!"
})
box.addEventListener("mouseup", function(e){
    box.className = "box3"
    text.innerText = "Double Click Me!"
})
box.addEventListener("dblclick", function(e){
    box.className = "box4"
    text.innerText = "Scroll on the Page!"
})
page.addEventListener("mousewheel", function(e){
    box.className = "box5"
    text.innerText = 'Press "b", "r", "y", "g", "o"!'
})
page.addEventListener("keypress", function(e){
    switch (e.key){
        case 'b':  
            box.className = "box1";
            text.innerText = 'Press "b", "r", "y", "g", "o"!';
            break;
        case 'r': 
            box.className = "box2";
            text.innerText = 'Press "b", "r", "y", "g", "o"!';
            break;
        case 'y': 
            box.className = "box3";
            text.innerText = 'Press "b", "r", "y", "g", "o"!';
            break;
        case 'g': 
            box.className = "box4";
            text.innerText = 'Press "b", "r", "y", "g", "o"!';
            break;
        case 'o': 
            box.className = "box5";
            text.innerText = 'Press "b", "r", "y", "g", "o"!';
            break;
        default: 
            null;
    }
})
