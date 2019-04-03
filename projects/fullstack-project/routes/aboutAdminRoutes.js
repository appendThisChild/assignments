const express = require('express')
const aboutAdminRouter = express.Router()
const About = require('../models/about.js')

// Post
aboutAdminRouter.post("/", (req, res, next) => {
    const newAbout = new About(req.body)
    newAbout.save((err, newAboutObj) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newAboutObj)
    })
})

// Put & Delete
aboutAdminRouter.route('/:_id')
    .put((req, res, next) => {
        About.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, updatedAbout) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedAbout)
            }
        )
    })
    .delete((req, res, next) => {
        About.findOneAndRemove(
            {_id: req.params._id},
            (err, deletedAbout) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(202).send(`Successfully removed ${deletedAbout.title} from About Posts!`)
            }
        )
    })

module.exports = aboutAdminRouter;