const express = require('express')
const newsAdminRouter = express.Router()
const News = require('../models/news.js')

// Post
newsAdminRouter.post("/", (req, res, next) => {
    const newNews = new News(req.body)
    newNews.save((err, newNewsObj) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newNewsObj)
    })
})

// Put & Delete
newsAdminRouter.route('/:_id')
    .put((req, res, next) => {
        News.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, updatedNews) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedNews)
            }
        )
    })
    .delete((req, res, next) => {
        News.findOneAndRemove(
            {_id: req.params._id},
            (err, deletedNews) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(202).send(`Successfully removed ${deletedNews.title} from News Posts!`)
            }
        )
    })

module.exports = newsAdminRouter;