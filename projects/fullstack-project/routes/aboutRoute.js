const express = require('express')
const aboutRouter = express.Router()
const About = require('../models/about.js')

aboutRouter.get("/", (req, res, next) => {
    About.find((err, about) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(about)
    })
})

module.exports = aboutRouter;