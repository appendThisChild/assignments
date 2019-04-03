import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

const UserContext = React.createContext()

class UserProvider extends Component {
    constructor(){
        super()
        this.state = {
            user: JSON.parse(localStorage.getItem('user')) || {},
            token: localStorage.getItem("token") || "",
            inSale: false,
            errMsg: ""
        }
    }
    signup = credentials => {
        axios.post("/auth/signup", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.user = JSON.stringify(user)
                localStorage.token = token
                this.setState({
                    user,
                    token
                }, () => {
                    if(this.state.inSale){
                        this.props.history.push("/paymentPackage")
                    } else {
                        this.props.history.push("/user") 
                    }
                })
            })
            .catch(err => this.setState({errMsg: err.response.data.errMsg}))
    }
    login = credentials => {
        axios.post("auth/login", credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.user = JSON.stringify(user)
                localStorage.token = token
                this.setState({
                    user,
                    token
                }, () => {
                    if(this.state.inSale){
                        this.props.history.push("/paymentPackage")
                    } else {
                        this.props.history.push("/user") 
                    }
                })
            })
            .catch(err => this.setState({errMsg: err.response.data.errMsg}))
    }
    logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        this.setState({
            user: {},
            token: ""
        })
    }
    inSale = () => {
        this.setState(() => ({
            inSale: true
        }))
    }
    saleDone = () => {
        this.setState(() => ({
            inSale: false
        }))
    }
    
    render(){
        return(
            <UserContext.Provider
                value={{
                    ...this.state,
                    signup: this.signup,
                    login: this.login,
                    logout: this.logout,
                    inSale: this.inSale,
                    saleDone: this.saleDone
                }}>
                { this.props.children }
            </UserContext.Provider>
        )
    }
}

export default withRouter(UserProvider)

export const withUser = C => props => (
    <UserContext.Consumer>
        { value => <C {...props} {...value}/> }
    </UserContext.Consumer>
)