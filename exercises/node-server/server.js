const express = require('express')
const app = express()

app.get("/somthing", (req, res) => {
    res.send("Hello World")
})

app.listen(5500, () => {
    console.log("Server is running on port 5500")
})