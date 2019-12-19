const express = require('express')
const router  = express.Router()
const Dish =require('../models/Dish.model')


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
router.get('/category/:category',(req,res)=>{
    Dish.find({category:req.params.category})
    .then(allCategory => res.json(allCategory))
    .catch(err => console.log("error al recuperar la categoria",err))
})
module.exports = router