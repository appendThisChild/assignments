//////////////////
// Global Variables

const api = "https://api.vschool.io/ryan/todo/";
const list = document.getElementById('todo-list');
const form = document["todo-form"];
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
    for (let i = 0; i < arr.length; i++){
        // Created elements
        const listContainer = document.createElement('div')
        const todoElement = document.createElement('h2')
        const img = document.createElement('img')
        const des = document.createElement('p')
        const price = document.createElement('p')
        // Element content
        todoElement.textContent = arr[i].title
        price.textContent = arr[i].price
        des.textContent = arr[i].description
        img.setAttribute("src", arr[i].imgUrl)

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
getInfo()