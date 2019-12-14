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
                                   res.json(order)
                               })
                               .catch(err=> console.log(err))
                           })
                       })
                      .catch(err => console.log("error al crea la peticion de plato",err))
            }
        })
})
router.get('/review',(req,res)=>{
    Order.find(req.user.activeOrder)
    .populate("user")
    .populate("dishRequested")
    .then(theOrder =>res.json(theOrder))
    .catch(err => console.log("error al recuperar la orden en proceso",err))
})
router.post('/delete/:id',(req,res)=>{
    requestDish.findByIdAndDelete(req.params.id)
    .then(eliminate => console.log("eliminada",eliminate))
    .catch(err=>console.log("error elimiando el plato",err))
})
router.get('/edit/:id',(req,res)=>{
    console.log(req.params.id)
    requestDish.findById(req.params.id)
    .then(theRequestDish => res.json(theRequestDish))
    .catch(err => console.log("error al recuperar el plato requerido de la BBDD ", err))
})
router.post('/edit/:id',(req,res)=>{
    requestDish.findOneAndReplace({_id:req.params.id},req.body)
    .then(x=> console.log("actualizado el plato",x))
    .catch(err => console.log("error al editar el plato",err))
})

module.exports = router