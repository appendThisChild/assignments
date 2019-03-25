import React, { Component } from "react"

class Profile extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    handleSubmit = () => {
        this.props.handleLogOut()
        this.props.history.push('/')
    }

    render(){
        return(
            <div>
                Profile
                <button onClick={this.handleSubmit}>Log Out</button>
            </div>
        ) 
    }
}

export default Profile;