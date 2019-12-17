const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const orderSchema = new Schema({
    user:{type:Schema.Types.ObjectId, ref:"User"},
    dishRequested:[{type:Schema.Types.ObjectId, ref:"Request"}],
    ready:{
        type:Boolean,
        default:false
    },
    confirm:{
        type:Boolean,
        default:false
    }
},
{
    timestapms:true
})

const Order = mongoose.model("Order",orderSchema)
module.exports = Order