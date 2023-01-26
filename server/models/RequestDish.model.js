const mongoose = require('mongoose')
const Schema   = mongoose.Schema
const User = require('./User')

const requestSchema = new Schema({
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
    },

    ready:{
        type:Boolean,
        default:false
    },

    // user:{type:Schema.Types.ObjectId, ref:"User"},

},
{
        timestamps:true
})

const Request =mongoose.model("Request",requestSchema)
module.exports = Request