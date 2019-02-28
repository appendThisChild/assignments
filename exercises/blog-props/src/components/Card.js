import React from "react"

function Card(props){
    let dollarSign;
    if (props.price <= 500){
        dollarSign = "$"
    } else if (props.price > 500 && props.price < 1000){
        dollarSign = "$$"
    } else {
        dollarSign = "$$$"
    }
    let backColor;
    if (props.toGo === "Spring"){
        backColor = "blue"
    } else if (props.toGo === "Summer"){
        backColor = "yellow"
    } else if (props.toGo === "Fall"){
        backColor = "green"
    } else {
        backColor = "snow"
    }
    return(
        <div className={backColor}>
            <h1>{props.place}</h1>
            <p>{props.toGo}</p>
            <h3>{dollarSign}</h3>
        </div>
    )
}

export default Card;