const express = require('express')
const generalInfoAdminRouter = express.Router()
const GeneralInfo = require('../models/generalInfo.js')

// Post
generalInfoAdminRouter.post("/", (req, res, next) => {
    const newGeneralInfo = new GeneralInfo(req.body)
    newGeneralInfo.save((err, newGeneralInfoObj) => {
        if (err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(newGeneralInfoObj)
    })
})

// Put & Delete
generalInfoAdminRouter.route('/:_id')
    .put((req, res, next) => {
        GeneralInfo.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, updatedGeneralInfo) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(201).send(updatedGeneralInfo)
            }
        )
    })
    .delete((req, res, next) => {
        GeneralInfo.findOneAndRemove(
            {_id: req.params._id},
            (err, deletedGeneralInfo) => {
                if (err){
                    res.status(500)
                    return next(err)
                }
                return res.status(202).send(`Successfully removed ${deletedGeneralInfo.title} from General Info Posts!`)
            }
        )
    })

module.exports = generalInfoAdminRouter;