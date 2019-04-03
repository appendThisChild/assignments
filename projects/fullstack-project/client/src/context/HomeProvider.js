import React, { Component } from "react"
import axios from "axios"
import { withRouter } from "react-router-dom"

const HomeContext = React.createContext()

const dataAxios = axios.create()

dataAxios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    config.headers.Authorization = `Bearer ${token}`
    return config
})

class HomeProvider extends Component {
    constructor(){
        super()
        this.state = {
            news: [],
            about: [],
            generalInfo: []
        }
    }
    getAllNews = () => {
        axios.get("/news").then(res => 
            this.setState({news: res.data})
        ).catch(err => console.log(err.response.data.errMsg))
    }
    addNews = newNews => {
        dataAxios.post("/api/admin/news", newNews)
            .then(response => {
                this.setState(prevState => ({
                    news: [...prevState.news, response.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    deleteNewsItem = _id => {
        dataAxios.delete(`/api/admin/news/${_id}`)
            .then(response => {
                this.setState(prevState => ({
                    news: prevState.news.filter(newsItem => newsItem._id !== _id)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    updateNewsItem = (_id, updates) => {
        dataAxios.put(`/api/admin/news/${_id}`, updates)
            .then(response => {
                this.setState(prevState => ({
                    news: prevState.news.map(newsItem => newsItem._id === _id ? response.data : newsItem)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    // get, put, post, delete for "About"
    getAllAbout = () => {
        axios.get("/about").then(res => 
            this.setState({about: res.data})
        ).catch(err => console.log(err.response.data.errMsg))
    }
    addAbout = newAbout => {
        dataAxios.post("/api/admin/about", newAbout)
            .then(response => {
                this.setState(prevState => ({
                    about: [...prevState.about, response.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    deleteAboutItem = _id => {
        dataAxios.delete(`/api/admin/about/${_id}`)
            .then(response => {
                this.setState(prevState => ({
                    about: prevState.about.filter(aboutItem => aboutItem._id !== _id)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    updateAboutItem = (_id, updates) => {
        dataAxios.put(`/api/admin/about/${_id}`, updates)
            .then(response => {
                this.setState(prevState => ({
                    about: prevState.about.map(aboutItem => aboutItem._id === _id ? response.data : aboutItem)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    // get, put, post , delete for "General Info"
    getAllGeneralInfo = () => {
        axios.get("/general-info").then(res => 
            this.setState({generalInfo: res.data})
        ).catch(err => console.log(err.response.data.errMsg))
    }
    addGeneralInfo = newGeneralInfo => {
        dataAxios.post("/api/admin/general-info", newGeneralInfo)
            .then(response => {
                this.setState(prevState => ({
                    generalInfo: [...prevState.generalInfo, response.data]
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    deleteGeneralInfoItem = _id => {
        dataAxios.delete(`/api/admin/general-info/${_id}`)
            .then(response => {
                this.setState(prevState => ({
                    generalInfo: prevState.generalInfo.filter(generalInfoItem => generalInfoItem._id !== _id)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    updateGeneralInfoItem = (_id, updates) => {
        dataAxios.put(`/api/admin/general-info/${_id}`, updates)
            .then(response => {
                this.setState(prevState => ({
                    generalInfo: prevState.generalInfo.map(generalInfoItem => generalInfoItem._id === _id ? response.data : generalInfoItem)
                }))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }
    render(){
        return(
            <HomeContext.Provider
                value={{
                    ...this.state,
                    getAllNews: this.getAllNews,
                    addNews: this.addNews,
                    deleteNewsItem: this.deleteNewsItem,
                    updateNewsItem: this.updateNewsItem,
                    getAllAbout: this.getAllAbout,
                    addAbout: this.addAbout,
                    deleteAboutItem: this.deleteAboutItem,
                    updateAboutItem: this.updateAboutItem,
                    getAllGeneralInfo: this.getAllGeneralInfo,
                    addGeneralInfo: this.addGeneralInfo,
                    deleteGeneralInfoItem: this.deleteGeneralInfoItem,
                    updateGeneralInfoItem: this.updateGeneralInfoItem
                }}>
                { this.props.children }
            </HomeContext.Provider>
        )

    }
}

export default withRouter(HomeProvider)

export const withHome = C => props => (
    <HomeContext.Consumer>
        { value => <C {...props} {...value}/>}
    </HomeContext.Consumer>
)