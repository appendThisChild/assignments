import React, { Component } from "react"
// import { Link } from "react-router-dom"


class BookAppointment extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = () => {
        this.props.handleInSale()
        this.props.history.push('/paymentPackage')
    }
    render(){
        return(
            <div>
                Book Appointment Link
                <button onClick={this.handleSubmit}>Continue to Payment</button>
            </div>
        )
    }
}

export default BookAppointment;