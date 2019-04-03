const express = require('express')
const newsRouter = express.Router()
const News = require('../models/news.js')

newsRouter.get("/", (req, res, next) => {
    News.find((err, news) => {
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(news)
    })
})

module.exports = newsRouter;