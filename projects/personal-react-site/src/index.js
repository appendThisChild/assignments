import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import "./styles.css"
import { BrowserRouter } from "react-router-dom"
import ApiProvider from "./components/shared/ApiProvider.js";


ReactDOM.render(
<ApiProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>   
</ApiProvider>
, 
document.getElementById("root"))