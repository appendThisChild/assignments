import React, { Component } from "react"
import axios from "axios"

const ApiContext = React.createContext()

class ApiProvider extends Component {
    constructor(){
        super()
        this.state = {
            films: [],
            moviePictures: []
        }
    }
    componentDidMount(){
        axios.get("https://ghibliapi.herokuapp.com/films/").then(res => 
            this.setState({films: res.data})
        ).catch(err => console.log(err))
        axios.get("https://api.vschool.io/ryan/todo/").then(res => 
                this.setState({moviePictures: res.data})
        ).catch(err => console.log(err))
    }
    makeAlphaOrder = (on) => {
        const list = [...this.state.films]
        list.sort((a, b)=> {
            let x = a.title.toLowerCase();
            let y = b.title.toLowerCase();
            let xArr = x.split(" ")
            let yArr = y.split(" ")
            if(xArr[0] === "the"){
                x = x.split(" ").slice(1).join(" ")
            }
            if(yArr[0] === "the"){
                y = y.split(" ").slice(1).join(" ")
            }
            if (x < y) {return -1;}
            if (x > y) {return 1;}
            return 0;
        })
        if(!on.on){
            list.reverse()
        }
        this.setState({films: list})
    }
    makeReleaseOrder = (on) => {
        const list = [...this.state.films]
        list.sort((a, b) => a.release_date - b.release_date)
        if(!on.on){
            list.reverse()
        }
        this.setState({films: list})
    }
    render(){
        return(
            <ApiContext.Provider
                value={{
                    films: this.state.films,
                    moviePictures: this.state.moviePictures,
                    makeAlphaOrder: this.makeAlphaOrder,
                    makeReleaseOrder: this.makeReleaseOrder
                }}>
                { this.props.children }
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