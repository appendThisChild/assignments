import React from "react"

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            backgroundColor: [
                {color1: "black", color2: "rgba(0, 0, 0, 0.5)"}, 
                {color1: "fuchsia", color2: "rgba(255, 0, 255, 0.5)"}, 
                {color1: "aqua", color2: "rgba(0, 255, 255, 0.5)"},
                {color1: "teal", color2: "rgba(0, 128, 128, 0.5)"},
                {color1: "purple", color2: "rgba(128, 0, 128, 0.5)"},
                {color1: "lime", color2: "rgba(0, 255, 0, 0.5)"},
                {color1: "maroon", color2: "rgba(128, 0, 0, 0.5)"},
                {color1: "navy", color2: "rgba(0, 0, 128, 0.5)"}]
        }
    }
    switchColors1 = (e) => {
        e.target.style.backgroundImage = `radial-gradient(circle, white, ${this.state.backgroundColor[e.target.id].color2}`;
        console.log("clickdown")
    }
    switchColors2 = (e) => {
        e.target.style.backgroundImage = `radial-gradient(circle, white, ${this.state.backgroundColor[e.target.id].color1}`;
        console.log("clickup")
    }
    render(){
        const button = this.state.backgroundColor.map((color, i) => <p key={i} id={i} style={{backgroundImage: `radial-gradient(circle, white, ${color.color1}`}} onMouseDown={this.switchColors1} onMouseUp={this.switchColors2} ></p>)
        return (
            <div className="grid">
                {button}
            </div>
        )
    }
}
export default App;