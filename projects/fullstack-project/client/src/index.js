import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import { BrowserRouter } from "react-router-dom"
import UserProvider from "./context/UserProvider.js"
import HomeProvider from "./context/HomeProvider.js"
import "./styles.css"


ReactDOM.render(
    <BrowserRouter>
        <UserProvider>
            <HomeProvider>
                <App />
            </HomeProvider>
        </UserProvider>
    </BrowserRouter>
,
document.getElementById("root"))