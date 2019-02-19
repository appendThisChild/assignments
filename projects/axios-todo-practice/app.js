
//////////////////
// Global Variables

const api = "https://api.vschool.io/ryan/todo/";
const list = document.getElementById('todo-list');
const form = document["todo-form"];
const box = document.getElementById("checkBox")
window.onload = getInfo()
///////////////////
// Functions

// Get the information from the API
function getInfo(){
    axios.get(api).then(res => {
        let todo = res.data
        insertTodo(todo)
    }).catch(error => console.log(error)) 
}
// Places the information on the dom in a specific way
function insertTodo(arr){
    list.innerHTML = ""
    for (let i = arr.length -1 ; i > -1; i--){
        // Created elements
        const listContainer = document.createElement('div')
        const todoElement = document.createElement('h2')
        const img = document.createElement('img')
        const des = document.createElement('p')
        const price = document.createElement('p')
        // Element content
        todoElement.textContent = arr[i].title
        if (arr[i].price === null){
            price.textContent = `Price: none`
        } else {
            price.textContent = `Price: ${arr[i].price}`
        }
        if (arr[i].description === ""){
            des.textContent = `Notes: none`
        } else {
            des.textContent = `Notes: ${arr[i].description}`
        }
        img.setAttribute("src", arr[i].imgUrl)
        listContainer.id = arr[i]["_id"]

        // Setting styles
        img.className = "todoImg"
        listContainer.className = "list"
        todoElement.className = "title"

        //complete style setup
        if (arr[i].completed === true){
            todoElement.style.textDecoration = "line-through"
        }
        listContainer.appendChild(img)
        listContainer.appendChild(todoElement)
        listContainer.appendChild(price)
        listContainer.appendChild(des)
        checkBox(listContainer)
        deleteTodo(listContainer)
        list.appendChild(listContainer)
    } 
}
// Inputing New todos
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        title: form.title.value,
        imgUrl: form.url.value,
        price: form.price.value,
        description: form.descript.value
    }
    axios.post(api, newTodo).then(res => getInfo()).catch(error => console.log(error))
})
// Making a Checkbox 
function checkBox(container){
    let check = document.createElement('input')
    check.type = "checkbox"
    // check.id = `checkBox`
    // check.value = "value"
    let label = document.createElement('label')
    label.appendChild(document.createTextNode("Completed: "))
    container.appendChild(label)
    container.appendChild(check)
    // Change function to checkbox
    check.addEventListener("change", function(e){
        let id = e.target.parentNode.id
        let curApi = `${api}${id}`
        let completed = {
            completed: true
        }
        let uncompleted = {
            completed: false
        }
        axios.get(curApi).then(res => {
            let complete = res.data.completed
            if (this.checked && complete === false){
            axios.put(curApi, completed).then(res => getInfo()).catch(err => console.log(err))
            } else if (this.checked && complete === true){
                axios.put(curApi, uncompleted).then(res => getInfo()).catch(err => console.log(err))
            }
        }).catch(error => console.log(error)) 
        
    })
}
function deleteTodo(container){
    let x = document.createElement("p")
    x.textContent = "delete"
    x.className = "delete"
    container.appendChild(x)
    x.addEventListener("click", function(e){
        let id = e.target.parentNode.id
        let curApi = `${api}${id}`
        axios.delete(curApi).then(res => getInfo()).catch(err => console.log(err))
    })
}
