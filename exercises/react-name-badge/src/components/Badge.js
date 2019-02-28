import React from "react"

function Badge(props){
    console.log(props)
    console.log(props.firstName)
    return(
        <div className={"nameBadge"}>
            <div className={"title"}>
                <h1>HELLO</h1>
                <h3>my name is {props.firstName} {props.lastName}</h3>
            </div>
            <div className={"mainContent"}>
                <h4>Email: <i>{props.email}</i></h4>
                <h4>Birth Place: <i>{props.placeOfBirth}</i></h4>
                <h4>Phone #: <i>{props.phoneNumber}</i></h4>
                <h4>Favorite Food: <i>{props.favoriteFood}</i></h4>
                <h4>Interesting Fact: <i>{props.about}</i></h4>
            </div>
        </div>
    )
}

export default Badge;