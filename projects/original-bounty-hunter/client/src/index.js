import React from "react"
import ReactDOM from "react-dom"
import App from "./App.js"
import ApiProvider from "./context/ApiProvider.js"

ReactDOM.render(
<ApiProvider>
    <App />
</ApiProvider>
,
 document.getElementById('root'))