import { Component } from "react"

class RenderToggle extends Component {
    constructor(){
        super()
        this.state = {
            on: true
        }
    }

    toggler = (cb) => {
        this.setState(p => ({
            on: !p.on
        }), () => cb(this.state))
        
    }
    toggler2 = () => {
        this.setState(p => ({
            on: !p.on
        }))
    }
    render(){
        return this.props.render({ on: this.state.on, toggler: this.toggler, toggler2: this.toggler2 })
    }
}

export default RenderToggle;