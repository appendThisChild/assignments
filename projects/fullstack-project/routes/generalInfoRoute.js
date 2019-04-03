const express = require('express')
const generalInfoRouter = express.Router()
const GeneralInfo = require('../models/generalInfo.js')

generalInfoRouter.get("/", (req, res, next) => {
    GeneralInfo.find((err, genInfo) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(genInfo)
    })
})

module.exports = generalInfoRouter;