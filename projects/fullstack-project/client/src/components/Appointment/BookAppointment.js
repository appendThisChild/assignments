import React, { Component } from "react"
import { withUser } from "../../context/UserProvider.js"

class BookAppointment extends Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }
    handleSubmit = () => {
        this.props.inSale()
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

export default withUser(BookAppointment);