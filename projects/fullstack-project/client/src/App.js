import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import { withUser } from "./context/UserProvider.js"

// On Every Page
import Header from "./components/Header/Header.js"
import Footer from "./components/Footer/Footer.js"

//Routes
import Home from "./components/Home/Home.js"
import BookAppointment from "./components/Appointment/BookAppointment.js"
    import PaymentPackage from "./components/Appointment/PaymentPackage.js"
        import Rececipt from "./components/Appointment/Receipt.js"
import Profile from "./components/User/Profile.js"
import SignIn from "./components/User/SignIn.js"
import Help from "./components/Help/Help.js"


class App extends Component {
    constructor(){
        super()
        this.state = {
            
        }
    }

    render(){
        const { token } = this.props
        return(
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" render={renderProps => <Home {...renderProps}/>}/>
                    <Route path="/bookAppointment" render={renderProps => <BookAppointment {...renderProps}/>}/>
                        <Route path="/paymentPackage" render={renderProps => (
                            token
                            ? <PaymentPackage {...renderProps}/>
                            : <SignIn {...renderProps}/>
                        )}/>
                            <Route path="/receipt" render={renderProps => <Rececipt {...renderProps}/>}/>
                    <Route path="/user" render={renderProps => (
                        token 
                        ? <Profile {...renderProps}/> 
                        : <SignIn {...renderProps}/>
                    )}/>
                    <Route path="/help" render={renderProps => <Help {...renderProps}/>}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default withUser(App);