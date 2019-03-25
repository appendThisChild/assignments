import React from "react"
import { Link } from "react-router-dom"

const Nav = (props) => {
    let user = ""
    if (props.loggedIn){
        user = props.userName
    } else {
        user = "Sign In"
    }
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/bookAppointment">Book an Appointment</Link>
            <Link to="/user" >{user}</Link>
            <Link to="/" ></Link>
        </div>
    )
}

export default Nav;