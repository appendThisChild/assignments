const express = require('express')
const app = express()

require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const PORT = process.env.PORT || 6250

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/business-massage-db', {useNewUrlParser: true}, () => {
    console.log('[o] Connected to the DB')
})








app.use((err, req, res, next) => {
    console.error(err)
    if (err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
    console.log(`[+] Server is running on Port ${PORT}`)
})