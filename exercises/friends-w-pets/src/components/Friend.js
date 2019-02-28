import React from "react"
import Pet from "./Pet"

function Friend(props){
    const pets = props.pets.map((pet, i) => <Pet key={i} name={pet.name} />)
    const { name } = props
    const { age } = props
    return (
        <div className="friend-div">
            <h1>Name: {name}</h1>
            <h2>Age: {age}</h2>
            {pets}
        </div>
    )
}

export default Friend;