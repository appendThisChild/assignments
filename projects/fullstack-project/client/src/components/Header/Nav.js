import React, { Component } from "react"
import { Link } from "react-router-dom"

class Navigation extends Component {
    constructor(){
        super()
        this.state = {
            dropdownOpen: false
        }
    }
    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }
    handleSignOut = () => {
        this.props.handleLogOut()
        this.toggle()
    }

    render(){
        let userLink = <Link to="/user" >Sign In</Link>
        if (this.props.loggedIn){
            userLink = 
            <div className={"navDropdownMenu"} onMouseEnter={this.toggle} onMouseLeave={this.toggle}>
                    <span className={"navDropdown"}>{this.props.userName}</span>
                    {this.state.dropdownOpen ? 
                        <>
                            <div>
                            <Link className={"navDropdownLink"} to="/user" onClick={this.toggle}>Profile</Link>
                            <Link className={"navDropdownLink2"} to="/" onClick={this.handleSignOut}>Sign Out</Link>
                            </div>
                        </>
                        : null
                    }
            </div>;
        }
        return(
            <nav>
                <Link to="/">Home</Link>
                <Link to="/bookAppointment">Book an Appointment</Link>
                {userLink}
                <Link to="/help">Contact Us / Help</Link>
            </nav>
        )
    }
}

export default Navigation;