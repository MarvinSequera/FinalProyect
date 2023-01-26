const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const dishSchema = new Schema({
    name:String,
    size:{
        type:String,
        enum:["Pequeño","Mediano","Grande"]
    },
    image:String,
    ingredients:[Object],
    category:{
        type:String,
        enum:["first","main","side","drink","dessert"]
    }
},
{
        timestamps:true
})

const Dish =mongoose.model("Dish",dishSchema)
module.exports = Dish