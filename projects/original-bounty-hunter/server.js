const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')

app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb://localhost:27017/first-db', {useNewUrlParser: true}, () => {
    console.log('[o] Connected to the DB')
})

app.use('/bounty', require('./routes/bountyRoute.js'))

app.listen(6250, () => {
    console.log('[+] Server is running on Port 6250')
})