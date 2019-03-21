import React, { Component } from "react"
import { withApi } from "./context/ApiProvider.js"

class App extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    // componentDidMount(){
    //     //axios requests to provider by calling provider function
    // }

    render(){
        // console.log(this.props)
        return(
            <div>
                Hello
            </div>
        )
    }
}

export default withApi(App);