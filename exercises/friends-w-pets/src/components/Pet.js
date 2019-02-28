import React from "react"

function Pet(props){
    const {name} = props
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default Pet;