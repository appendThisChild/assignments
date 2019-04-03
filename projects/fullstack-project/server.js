const express = require('express')
const app = express()

require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
const { checkIfAdmin } = require('./utils/app.js')
const PORT = process.env.PORT || 6250


app.use(express.json())
app.use(morgan('dev'))
app.use("/api", expressJwt({secret: process.env.SECRET}))
app.use("/api/admin", (req, res, next) => {
    checkIfAdmin(req, res, next)
})

mongoose.connect('mongodb://localhost:27017/business-massage-db', {useNewUrlParser: true}, () => {
    console.log('[o] Connected to the DB')
})

//Routes
app.use("/auth", require('./routes/authRoutes.js'))
app.use("/news", require('./routes/newsRoute.js'))
app.use("/api/admin/news", require('./routes/newsAdminRoutes.js'))
app.use("/about", require('./routes/aboutRoute.js'))
app.use("/api/admin/about", require("./routes/aboutAdminRoutes.js"))
app.use("/general-info", require('./routes/generalInfoRoute.js'))
app.use("/api/admin/general-info", require('./routes/generalInfoAdminRoutes.js'))


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