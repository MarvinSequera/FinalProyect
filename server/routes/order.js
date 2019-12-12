const express = require('express')
const router  = express.Router()
const Dish =require('../models/Dish.model')
const Order =require('../models/Oder.model')

const User =require('../models/User')

const requestDish = require('../models/RequestDish.model')

router.post('',(req,res)=>{
const requireDish =req.body
        User.findById(req.user._id)
        .then(user => {

            if(!user.order) {
               User.findByIdAndUpdate(req.user._id, {$set: {order: true}}, {new:true})
                .then(user => {
                     requestDish.create(requireDish)
                       .then(theRequest => {

                           Order.create({
                               user: req.user._id,
                               dishRequested: [theRequest._id]
                           }).then(order => {
                               console.log(order)
                               console.log(theRequest._id)
                               User.findByIdAndUpdate(req.user._id, {$set: {activeOrder: order._id}}, {new:true})
                            .then(user => {

                                res.json(order)
                            })
                          
                           }).catch(err => console.log(err))


                       })
                      .catch(err => console.log("error al crea la peticion de plato",err))

                })
            } else {

                 requestDish.create(requireDish)
                       .then(theRequest => {

                           User.findById(req.user._id)
                           .then(user => {
                               Order.findByIdAndUpdate(user.activeOrder, {$addToSet: {dishRequested: theRequest._id}}, {new:true})
                               .then(order => {
                                   req.json(order)
                               })
                               .catch(err=> console.log(err))
                           })
                          

                       })
                      .catch(err => console.log("error al crea la peticion de plato",err))


            }
        })
    



    // console.log(req.user)
    // const requireDish =req.body
    // requestDish.create(requireDish)
    // .then(theRequest => res.json(theRequest))
    // .catch(err => console.log("error al crea la peticion de plato",err))
})

module.exports = router