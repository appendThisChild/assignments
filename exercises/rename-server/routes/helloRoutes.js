const express = require('express')
const helloRouter = express.Router()

helloRouter.route('/')
    .get((req, res) => {
        res.send("GET on /hello endpoint")
    })

module.exports = helloRouter;