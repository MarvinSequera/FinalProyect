const express = require('express')
const router  = express.Router()
const Dish =require('../models/Dish.model')

router.get('/first',(req,res)=>{
    // console.log(req.params)
    Dish.find({category:"Entrante"})
    .then(theFirst=>{
        res.json(theFirst)})
    .catch(err=>console.log("error al recuperar primeros",err))
})

router.get('/main',(req,res)=>{
    Dish.find({category:"Principal"})
    .then(theMain=>{
        res.json(theMain)})
    .catch(err=>console.log("error al recuperar primeros",err))
})

router.get('/side',(req,res)=>{
    Dish.find({category:"Acompañante"})
    .then(theSide=>{
        res.json(theSide)})
    .catch(err=>console.log("error al recuperar primeros",err))
})
router.get('/drinks',(req,res)=>{
    Dish.find({category:"Bebida"})
    .then(theDrink=>{
        res.json(theDrink)})
    .catch(err=>console.log("error al recuperar primeros",err))
})
router.get('/dessert',(req,res)=>{
    Dish.find({category:"Postre"})
    .then(theDessert=>{
        res.json(theDessert)})
    .catch(err=>console.log("error al recuperar primeros",err))
})
router.get('/:id',(req,res)=>{
    dishId=req.params.id
    Dish.findById(dishId)
    .then(theDish=>res.json(theDish))
    .catch(err=>console.log("error al recuperar primeros",err))
})
router.post('/:id',(req,res) =>{
    console.log(req.user)
    const requireDish =req.body
    requestDish.create(requireDish)
    .then(theRequest => res.json(theRequest))
    .catch(err => console.log("error al crea la peticion de plato",err))
})
module.exports = router