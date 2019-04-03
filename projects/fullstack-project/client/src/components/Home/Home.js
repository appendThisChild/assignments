import React, { Component } from "react"
import Post from "./News/Post.js"
import { withHome } from "../../context/HomeProvider.js"

class Home extends Component {
    constructor(){
        super()
        this.state = {

        }
    }

    render(){
        const {
            news,
            getAllNews,
            addNews,
            deleteNewsItem,
            updateNewsItem,
            about,
            getAllAbout,
            addAbout,
            deleteAboutItem,
            updateAboutItem,
            generalInfo,
            getAllGeneralInfo,
            addGeneralInfo,
            deleteGeneralInfoItem,
            updateGeneralInfoItem,

        } = this.props
       return(
            <div>
                <Post
                className={""}
                title="News"
                getPosts={getAllNews}
                addPost={addNews}
                deletePost={deleteNewsItem}
                updatePost={updateNewsItem}
                posts={news}
                postBtnText="Submit News"
                />
                <Post
                className={""}
                title='About "Person"'
                getPosts={getAllAbout}
                addPost={addAbout}
                deletePost={deleteAboutItem}
                updatePost={updateAboutItem}
                posts={about}
                postBtnText="Submit About Person"
                />
                <Post
                className={""}
                title="General Info"
                getPosts={getAllGeneralInfo}
                addPost={addGeneralInfo}
                deletePost={deleteGeneralInfoItem}
                updatePost={updateGeneralInfoItem}
                posts={generalInfo}
                postBtnText="Submit General Info"
                />
            </div>
        ) 
    }
}

export default withHome(Home);