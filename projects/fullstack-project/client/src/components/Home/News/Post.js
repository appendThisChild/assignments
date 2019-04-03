import React, { Component } from "react"
import HomeItem from "./HomeItem.js"
import HomeForm from "../HomeForm.js"
import { withUser } from "../../../context/UserProvider.js"

class Post extends Component {
    constructor(){
        super()
        this.state = {
            title: "",
            content: ""
        }
    }
    componentDidMount(){
        this.props.getPosts()
    }
    handleChange = e => {
        const value = e.target.value
        this.setState({
            [e.target.name] : value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        const newPost = {
            title: this.state.title,
            content: this.state.content
        }
        this.props.addPost(newPost)
        this.setState({
            title: "",
            content: ""
        })
    }

    render(){
        const { isAdmin } = this.props.user
        const { deletePost, updatePost, postBtnText } = this.props
        const mappedPosts = this.props.posts.map((post, i) => 
            <HomeItem 
                deleteItem={deletePost}
                updateItem={updatePost}
                isAdmin={isAdmin}
                key={post._id} 
                {...post}
            />
        )
        const form = 
            isAdmin ? 
                <HomeForm 
                btnText={postBtnText}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                {...this.state}
                />
            : ""
        return(
            <div className={this.props.className}>
                <h1>{this.props.title}</h1>
                {mappedPosts}
                {form}
            </div>
        ) 
    }
}

export default withUser(Post);