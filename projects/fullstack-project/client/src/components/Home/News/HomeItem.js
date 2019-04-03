import React, { Component } from "react"
import HomeForm from "../HomeForm.js"

class HomeItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            editToggle: false,
            title: props.title,
            content: props.content
        }
    }
    toggler = () => {
        this.setState(prevState => ({
            editToggle : !prevState.editToggle
        }))
    }
    handleChange = e => {
        const value = e.target.value
        this.setState({
            [e.target.name] : value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const updates = {
            title: this.state.title,
            content: this.state.content
        }
        this.props.updateItem(this.props._id, updates)
        this.toggler()
    }

    render(){
        const { isAdmin, title, content, createdAt, _id } = this.props
        return(
            <div>
                {isAdmin ?
                    <>
                        {!this.state.editToggle ?
                        <>
                            <h2>{title}</h2>
                            <span>{createdAt}</span>
                            <p>{content}</p>
                            <button></button>
                            <button onClick={() => this.props.deleteItem(_id)}>Delete</button>
                            <button onClick={this.toggler}>Edit</button>
                        </>
                        :
                        <>
                            <HomeForm  
                                handleChange={this.handleChange}
                                handleSubmit={this.handleSubmit}
                                btnText="Submit Edit"
                                {...this.state}
                            />
                            <button onClick={this.toggler}>Cancel</button>
                        </>
                        }
                    </>
                    :
                    <>
                        <h2>{title}</h2>
                        <p>{content}</p>
                    </>
                }
            </div>
        )
    }
}

export default HomeItem;