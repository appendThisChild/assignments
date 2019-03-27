import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"

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
    import SignUp from "./components/User/SignUp.js"
import Help from "./components/Help/Help.js"


class App extends Component {
    constructor(){
        super()
        this.state = {
            userName: "Ryan Pettingill",
            loggedIn: false,
            inSale: false
        }
    }
    handleInSale = () => {
        this.setState(() => ({
            inSale: true
        }))
    }
    handleSaleDone = () => {
        this.setState(() => ({
            inSale: false
        }))
    }
    handleLogIn = () => {
        this.setState(() => ({
            loggedIn: true
        }))
    }
    handleLogOut = () => {
        this.setState(() => ({
            loggedIn: false
        }))
    }


    render(){
        const { loggedIn, inSale, userName } = this.state
        return(
            <div>
                <Header loggedIn={loggedIn} userName={userName} handleLogOut={this.handleLogOut}/>
                <Switch>
                    <Route exact path="/" render={renderProps => <Home {...renderProps}/>}/>
                    <Route path="/bookAppointment" render={renderProps => <BookAppointment handleInSale={this.handleInSale} {...renderProps}/>}/>
                        <Route path="/paymentPackage" render={renderProps => (
                            loggedIn
                            ? <PaymentPackage handleSaleDone={this.handleSaleDone} {...renderProps}/>
                            : <SignIn inSale={inSale} handleLogIn={this.handleLogIn} {...renderProps}/>
                        )}/>
                            <Route path="/receipt" render={renderProps => <Rececipt {...renderProps}/>}/>
                    <Route path="/user" render={renderProps => (
                        loggedIn 
                        ? <Profile {...renderProps}/> 
                        : <SignIn inSale={inSale} handleLogIn={this.handleLogIn} {...renderProps}/>
                    )}/>
                        <Route path="/signUp" render={renderProps => <SignUp inSale={inSale} handleLogIn={this.handleLogIn} {...renderProps}/>}/>
                    <Route path="/help" render={renderProps => <Help {...renderProps}/>}/>
                </Switch>
                <Footer />
            </div>
        )
    }
}

export default App;