import React, { Component } from "react"
import { Link } from "react-router-dom"

class SignIn extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    handleSubmit = () => {
        this.props.handleLogIn()
        if (this.props.inSale){
            this.props.history.push('/paymentPackage')
        } else {
            this.props.history.push('/user')
        }
    }
    render(){
        return(
            <div>
                Sign In
                <button onClick={this.handleSubmit}>{this.props.inSale ? "Continue Payment Process" : "Profile"}</button>
                <Link to="/signUp">Sign Up</Link>
            </div>
        )
    }
}

export default SignIn;