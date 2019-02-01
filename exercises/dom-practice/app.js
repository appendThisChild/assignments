let logIt = document.getElementById('logIt')
let word = document.getElementById('wordChange')
let button = document.getElementById('button')
button.addEventListener("click", changeWords)
function changeWords(){
    word.innerText = "It worked!\n\nGreat Job!\n\nNow click this button to change the styling of the words";
    removeButton("button")
    buttonChangeStyling("btnApr", "Now Click Me!", "wordChange", "newWords")
}
function buttonChangeStyling(idBtnApr, wordsOnButton, idWhichWords, styling){
    let x = document.getElementById(idBtnApr)
    let btn = document.createElement("BUTTON")
    let t = document.createTextNode(wordsOnButton)
    btn.appendChild(t);
    document.body.appendChild(btn);
    x.appendChild(btn).addEventListener("click", function(){
        document.getElementById(idWhichWords).className = styling;
        removeButton(idBtnApr)
    });
}
function removeButton(id){
    let x = document.getElementById(id);
    x.parentNode.removeChild(x)
}