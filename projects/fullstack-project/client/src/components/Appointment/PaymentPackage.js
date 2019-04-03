import React, { Component } from "react"
import { withUser } from "../../context/UserProvider.js"

class PaymentPackage extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    handleSubmit = () => {
        this.props.saleDone()
        this.props.history.push('/receipt')
    }
    render(){
       return(
            <div>
                Select Payment and Package 
                <button onClick={this.handleSubmit}>Book Appointment</button>
            </div>
        ) 
    }
}

export default withUser(PaymentPackage);