import React, { Component } from "react"
import axios from "axios"

const ApiContext = React.createContext()

class ApiProvider extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    // list of axios CRUD functions

    render(){
        return(
            <ApiContext.Provider 
                value={{
                    //this.state data
                }}>
                {this.props.children}
            </ApiContext.Provider>
        )
    }
}

export default ApiProvider;

export const withApi = C => props => (
    <ApiContext.Consumer>
        {value => <C {...value} {...props}/>}
    </ApiContext.Consumer>
)