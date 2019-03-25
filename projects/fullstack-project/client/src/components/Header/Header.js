import React from "react"
import Nav from "./Nav.js"

const Header = (props) => {
    return(
        <div>
            Header
            <Nav loggedIn={props.loggedIn} userName={props.userName}/>
        </div>
    )
}

export default Header;