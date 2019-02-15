const pokeNameContainer = document.getElementById('poke-names')


axios.get("https://api.vschool.io/pokemon").then(response => {
    const pokeNames = response.data.objects[0].pokemon
    printNames(pokeNames)
}).catch(error => console.log(error))

function printNames(arr){
    for (let i = 0; i < arr.length; i++){
        const nameContainer = document.createElement('div')
        const nameElement = document.createElement('h2')

        nameElement.textContent = arr[i].name

        nameContainer.appendChild(nameElement)
        pokeNameContainer.appendChild(nameContainer)
    }
}