import React, { Component } from "react"
// import { Link } from "react-router-dom"

class PaymentPackage extends Component {
    constructor(){
        super()
        this.state = {

        }
    }
    handleSubmit = () => {
        this.props.handleSaleDone()
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

export default PaymentPackage;